import React, { Component } from 'react';
import Header from './components/header/header';
import SkillTree from './components/skill-tree/skill-tree';
import Classes from './data/classes-v/classes-v';

import './app.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLevel: 1,
      maxLevel: 99,
      selectedClass: Object.keys(Classes)[0],
      selectedTitle: "N/A",
      skillPointTotal: 0,
      skillPointMax: 3,
      classData: JSON.parse(JSON.stringify(Classes[Object.keys(Classes)[0]]))
    };
  }

  changeSelectedLevel = (selectedLevel) => {
    this.setState({
      selectedLevel: selectedLevel,
      skillPointMax: parseInt(selectedLevel) + 2
    });
  }

  changeSelectedClass = (classSelected) => {
    let classData = JSON.parse(JSON.stringify(Classes[classSelected]));
    this.setState({
      skillPointTotal: 0,
      selectedClass: classSelected,
      selectedTitle: "N/A",
      classData: classData
    });
  }

  changeSelectedTitle = (titleSelected) => {
    let classData = Classes[this.state.selectedClass];

    // Reset points for skills
    let newClassData = this.state.classData;
    let skills = Object.keys(newClassData.skills);

    skills.forEach(skill => {
      newClassData.skills[skill].pointCurrent = 0;
    });

    this.setState({
      skillPointTotal: 0,
      classData: newClassData
    });

    if (titleSelected !== 'N/A') {
      classData = this.createSelectedTitleClass(Classes[this.state.selectedClass], titleSelected);
    }

    this.setState({
      selectedTitle: titleSelected,
      classData: classData
    });
  }

  createSelectedTitleClass(classData, titleValue) {
    let titleData;
    if (titleValue === 'A') {
      titleData = classData.titleA;
    } else {
      titleData = classData.titleB;
    }

    // Merge up data if title was selected
    if (titleData) {
      try {
        let titles = classData.titles.slice(0);
        let baseSkills = JSON.parse(JSON.stringify(classData.skills));
        let titleSkills = JSON.parse(JSON.stringify(titleData.skills));
        let basePrereqs = classData.prereqs.slice(0);
        let titlePrereqs = titleData.prereqs.slice(0);

        return {
          titles: titles,
          skills: Object.assign(baseSkills, titleSkills),
          prereqs: basePrereqs.concat(titlePrereqs)
        };
      } catch (error) {
        console.log(error);
      }
    }
  }

  updateSkillPoints = (skillId, newPointValue) => {
    let newClassData = this.state.classData;
    if (newClassData.skills[skillId] && newPointValue <= newClassData.skills[skillId].pointMax) {
      newClassData.skills[skillId].pointCurrent = newPointValue;
      this.updatePrereqs(skillId);
    }

    this.setState({
      classData: newClassData
    });

    this.calculatePointTotal();
  }

  updatePrereqs(skillId) {
    let newClassData = this.state.classData;
    let prereqs = this.state.classData.prereqs;
    prereqs.forEach(prereqMapping => {
      // Update any prerequisites if needed
      prereqMapping.endSkills.forEach(endSkill => {
        if (endSkill.id === skillId && newClassData.skills[endSkill.id].pointCurrent > 0) {
          prereqMapping.startSkills.forEach(prereqSkill => {
            if (newClassData.skills[prereqSkill.id].pointCurrent < prereqSkill.level) {
              this.updateSkillPoints(prereqSkill.id, prereqSkill.level);
            }
          });
        }
      });

      // Update any subsequent skills if needed
      prereqMapping.startSkills.forEach(startSkill => {
        if (startSkill.id === skillId && newClassData.skills[startSkill.id].pointCurrent < startSkill.level) {
          prereqMapping.endSkills.forEach(subsequentSkill => {
            this.updateSkillPoints(subsequentSkill.id, 0);
          });
        }
      });
    });
  }

  calculatePointTotal() {
    let skillPointTotal = 0;
    Object.keys(this.state.classData.skills).forEach(skillId => {
      skillPointTotal = skillPointTotal + this.state.classData.skills[skillId].pointCurrent;
    });

    this.setState({
      skillPointTotal: skillPointTotal
    });
  }

  render() {
    var titles = this.state.classData.titles;
    if (typeof titles === 'undefined') {
      titles = [];
    }

    return (
      <div className="app">
        <Header maxLevel={this.state.maxLevel} classes={Object.keys(Classes)} selectedTitle={this.state.selectedTitle} titles={titles} skillPointTotal={this.state.skillPointTotal} skillPointMax={this.state.skillPointMax} onLevelSelect={this.changeSelectedLevel} onClassSelect={this.changeSelectedClass} onTitleSelect={this.changeSelectedTitle} />
        <SkillTree class={this.state.classData} updateSkillPoints={this.updateSkillPoints} />
      </div>
    );
  }
}

export default App;
