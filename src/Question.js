import React, { Component } from 'react';

class Question extends Component {
  constructor(props){
    super(props)
    this.handleToggleSelected = this.handleToggleSelected.bind(this)
    this.handleToggleAnswer = this.handleToggleAnswer.bind(this)
    this.state = {
      selected: false,
      answer: false,
      audio: new Audio('data/Jeopardy-theme-song.mp3')
    }
  }
  handleToggleSelected(){
    this.setState((prevState) => {
      //const previousStateSelectedValue = prevState.selected
      return {
        selected: !prevState.selected,
        answer: prevState.selected ? false : prevState.answer
      }
    })
  }
  handleToggleAnswer(){
    this.setState((prevState) => {
      return {
        answer: !prevState.answer
      }
    })
  }
  componentDidUpdate(){
    if (this.state.selected && !this.state.answer){
      console.log("test1")
      this.state.audio.play();
    }
    else{
      console.log("test2")
      this.state.audio.pause();
    }


  }
  render() {
    const awardToTeamDisplay = () => {
      const teamArray = this.props.teams.map((t) => {
        return <p>
        {t.name}
        <button onClick={() => {this.props.handleAwardPoints(t.name, this.props.value, true); this.handleToggleSelected()}}>Correct</button>
        <button onClick={() => {this.props.handleAwardPoints(t.name, this.props.value, false); this.handleToggleSelected()}}>Wrong</button>
        </p>
      })
      return teamArray
    }
    const classNames = this.state.selected ? "question selected" : "question"
    return (
      <div className={classNames}>
      <div onClick={this.handleToggleSelected}>
        <p>{this.props.value}</p>

      </div>
      <div>
        {this.state.selected && !this.state.answer && <p>{this.props.question}</p>}
        {this.state.selected && !this.state.answer && <button onClick={this.handleToggleAnswer}>Show Answer</button>}
        {this.state.answer && <p onClick={this.handleToggleAnswer}>{this.props.answer}</p>}
        {this.state.answer && awardToTeamDisplay()}

        </div>
        </div>
    );
  }
}

export default Question;
