import React, { Component } from 'react';
import './skill.scss';

class Skill extends Component {
  handleLeftClick = () => {
    if (this.props.skill.pointCurrent < this.props.skill.pointMax) {
      this.props.updatePoints(this.props.skill.id, this.props.skill.pointCurrent + 1);
    }
  }

  handleRightClick = (event) => {
    event.preventDefault();
    let newPointValue = this.props.skill.pointCurrent - 1;
    if (newPointValue > -1) {
      this.props.updatePoints(this.props.skill.id, newPointValue);
    }
  }

  render() {
    return (
      <div className={"skill " + (this.props.skill.pointCurrent === 0 ? 'has-no-points' : '')} id={this.props.skill.id} onClick={this.handleLeftClick} onContextMenu={this.handleRightClick}>
        <div className="skill-name">{this.props.skill.name}</div>
        <div className="skill-points">
          <div className="skill-points-current">{this.props.skill.pointCurrent}</div>
          <div className="skill-points-max">{this.props.skill.pointMax}</div>
        </div>
      </div>
    );
  }
}

export default Skill;
