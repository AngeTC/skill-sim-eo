import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
  handleLevelChange = (event) => {
    this.props.onLevelSelect(event.target.value);
  }

  handleClassChange = (event) => {
    this.props.onClassSelect(event.target.value);
  }

  handleTitleChange = (event) => {
    this.props.onTitleSelect(event.target.value);
  }

  render() {
    var levelOptions = [];

    for (var i = 1; i <= this.props.maxLevel; i++) {
      levelOptions.push(<option key={i} value={i}>{i}</option>);
    }

    var classOptions = this.props.classes.map(function (classOption) {
      return <option key={classOption} value={classOption}>{classOption}</option>;
    });

    var titleOptions = this.props.titles.map(function (titleOption) {
      return <option key={titleOption.name} value={titleOption.value}>{titleOption.name}</option>;
    });

    var skillPointClasses = "header-skillpoint-count";
    if (this.props.skillPointTotal - this.props.skillPointMax === 0) {
      skillPointClasses += " on-max";
    } else if (this.props.skillPointTotal - this.props.skillPointMax > 0) {
      skillPointClasses += " over-max";
    }

    return (
      <div className="header">
        <div className="header-logo"></div>
        <div className="header-section">
          <div className="header-level-select">
            <div className="header-label">Level</div>
            <select className="header-select" onChange={this.handleLevelChange}>
              {levelOptions}
            </select>
          </div>
        </div>
        <div className="header-section">
          <div className="header-class-select">
            <div className="header-label">Class</div>
            <select className="header-select" onChange={this.handleClassChange}>
              {classOptions}
            </select>
          </div>
          <div className="header-title-select">
            <div className="header-label">Title</div>
            <select className="header-select" value={this.props.selectedTitle} onChange={this.handleTitleChange}>
              <option value="N/A">N/A</option>
              {titleOptions}
            </select>
          </div>
        </div>
        <div className="header-section">
          <div className="header-skillpoint">
            <div className="header-label">Skill Points</div>
            <div className={skillPointClasses}>{this.props.skillPointTotal + "/" + this.props.skillPointMax}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
