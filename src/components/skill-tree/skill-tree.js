import React, { Component } from 'react';
import Skill from './skill/skill';
import './skill-tree.scss';

class SkillTree extends Component {
  createSkillNodes() {
    var skillNodes = [];
    var SkillPositionGrid = [];
    for (var skill in this.props.class.skills) {
      if (this.props.class.skills.hasOwnProperty(skill)) {
        var skillObject = this.props.class.skills[skill];

        // Check and create column array if needed.
        if (typeof SkillPositionGrid[skillObject.coords.x] === 'undefined') {
          SkillPositionGrid[skillObject.coords.x] = [];
        }

        // Push skill into appropriate column
        SkillPositionGrid[skillObject.coords.x][skillObject.coords.y * 2] = skillObject;
        SkillPositionGrid[skillObject.coords.x][skillObject.coords.y * 2 + 1] = "";
      }
    }

    // Contruct elements based on 
    for (var i = 0; i < SkillPositionGrid.length; i++) {
      for (var j = 0; j < SkillPositionGrid[i].length; j++) {
        switch (SkillPositionGrid[i][j]) {
          case undefined:
            SkillPositionGrid[i][j] = <div key={i + "-" + j + "-filler"} className="skilltree-node-filler"></div>;
            break;
          case "":
            SkillPositionGrid[i][j] = undefined;
            break;
          default:
            SkillPositionGrid[i][j] = <Skill key={SkillPositionGrid[i][j].id} skill={SkillPositionGrid[i][j]} updatePoints={this.props.updateSkillPoints} />;
            break;
        }
      }
      skillNodes.push(<div key={i} className="skilltree-node-column">{SkillPositionGrid[i]}</div>);
    }

    return skillNodes;
  }

  createSkillLines() {
    const nodeHeight = 36;
    const nodeWidth = 206;
    const nodeColumnBuffer = 64;
    const nodeVerticalBuffer = 10;
    const baseHorizontalLineLength = 30;
    const skills = this.props.class.skills;
    const prereqs = this.props.class.prereqs;

    var skillLines = [];

    prereqs.forEach(prereq => {
      var currentStartSkillXPos = 0;
      // Render horizontal lines
      prereq.startSkills.forEach(startSkill => {
        let skillData = skills[startSkill.id];
        currentStartSkillXPos = skillData.coords.x;
        let horizontalPos = (skillData.coords.x + 1) * (nodeWidth) + skillData.coords.x * nodeColumnBuffer;
        let verticalPos = skillData.coords.y * (nodeHeight + nodeVerticalBuffer) + nodeHeight / 2;
        skillLines.push(this.createHorizontalLine(horizontalPos, verticalPos, baseHorizontalLineLength));

        if (startSkill.level) {
          let horizontalLabelPos = (skillData.coords.x + 1) * (nodeWidth) + skillData.coords.x * nodeColumnBuffer;
          let verticalLabelPos = skillData.coords.y * (nodeHeight + nodeVerticalBuffer) + nodeHeight / 4;
          skillLines.push(this.createPreReqLabel(horizontalLabelPos, verticalLabelPos, startSkill.level));
        }
      });

      prereq.endSkills.forEach(endSkill => {
        let skillData = skills[endSkill.id];
        let lineLength = (skillData.coords.x - currentStartSkillXPos - 1) * (baseHorizontalLineLength * 2 + nodeWidth) + baseHorizontalLineLength;
        let horizontalPos = skillData.coords.x * (nodeWidth + nodeColumnBuffer) - (lineLength + 4);
        let verticalPos = skillData.coords.y * (nodeHeight + nodeVerticalBuffer) + nodeHeight / 2;
        skillLines.push(this.createHorizontalLine(horizontalPos, verticalPos, lineLength));
      });

      // Render vertical line if needed
      var verticalLineNeeded = false;
      var verticalStartingSkill;
      var verticalEndingSkill;

      if (prereq.startSkills.length > 1 || prereq.endSkills.length > 1) {
        verticalLineNeeded = true;
        if (prereq.startSkills.length > prereq.endSkills.length) {
          verticalStartingSkill = skills[prereq.startSkills[0].id];
          verticalEndingSkill = skills[prereq.startSkills[prereq.startSkills.length - 1].id];
        } else {
          verticalStartingSkill = skills[prereq.endSkills[0].id];
          verticalEndingSkill = skills[prereq.endSkills[prereq.endSkills.length - 1].id];
        }
      }

      if (verticalLineNeeded) {
        var horizontalPos;
        if (prereq.endSkills.length < prereq.startSkills.length) {
          horizontalPos = (verticalStartingSkill.coords.x + 1) * (nodeWidth) + verticalStartingSkill.coords.x * nodeColumnBuffer + 30;
        } else {
          horizontalPos = (verticalStartingSkill.coords.x) * (nodeWidth + nodeColumnBuffer) - 34;
        }
        var verticalPos = verticalStartingSkill.coords.y * (nodeHeight + nodeVerticalBuffer) + nodeHeight / 2;
        var lineLength = (verticalEndingSkill.coords.y - verticalStartingSkill.coords.y) * (nodeHeight + nodeVerticalBuffer);
        skillLines.push(this.createVerticalLine(horizontalPos, verticalPos, lineLength));
      }
    });

    return skillLines;
  }

  createHorizontalLine(x, y, length) {
    return <div className="skilltree-line horizontal" key={x + "-" + y + "-horizontal"} style={{ width: length + 4, height: 4, left: x, top: y }} />;
  }

  createVerticalLine(x, y, length) {
    return <div className="skilltree-line vertical" key={x + "-" + y + "-vertical"} style={{ width: 4, height: length + 4, left: x, top: y }} />;
  }

  createPreReqLabel(x, y, level) {
    return <div className="skilltree-prereq-label" key={x + "-" + y + + "-label"} style={{ left: x + 4, top: y }}>Lv{level}</div>;
  }

  render() {
    var skillNodes = this.createSkillNodes();
    var skillLines = this.createSkillLines();
    return (
      <div className="skilltree" id="skill-tree">
        <div className="skilltree-nodes">{skillNodes}</div>
        <div className="skilltree-lines">{skillLines}</div>
      </div>
    );
  }
}

export default SkillTree;
