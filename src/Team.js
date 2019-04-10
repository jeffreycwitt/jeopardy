import React, { Component } from 'react';

class Team extends Component {
  constructor(props){
    super(props)
    this.handleEditTeam = this.handleEditTeam.bind(this)
  }
  handleEditTeam(e){
    console.log(e.target.getAttribute("data-value"), e.target.textContent)
    this.props.handleEditTeam(this.props.name, e.target.getAttribute("data-value"), e.target.textContent)
  }
  render() {

    return (
      <span className="team">
      <span contenteditable="true" onBlur={this.handleEditTeam} data-value="team">{this.props.name}</span>: <span contenteditable="true" onBlur={this.handleEditTeam} data-value="score">{this.props.score}</span>
      </span>


    );
  }
}

export default Team;
