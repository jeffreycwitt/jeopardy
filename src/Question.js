import React, { Component } from 'react';

class Question extends Component {
  constructor(props){
    super(props)
    this.handleToggleSelected = this.handleToggleSelected.bind(this)
    this.handleAnswered = this.handleAnswered.bind(this)
    this.state = {
      selected: false,
      audio: new Audio('data/Jeopardy-theme-song.mp3'),
      answered: false
    }
  }
  handleToggleSelected(){
    this.setState((prevState) => {
      //const previousStateSelectedValue = prevState.selected
      return {
        selected: !prevState.selected,
      }
    })
  }
  handleAnswered(){
    this.setState((prevState) => {
      return {
        answered: true
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
        <button onClick={() => {this.props.handleAwardPoints(t.name, this.props.value, true); this.handleAnswered()}}>Correct</button>
        <button onClick={() => {this.props.handleAwardPoints(t.name, this.props.value, false)}}>Wrong</button>
        </p>
      })
      return teamArray
    }
    const classNames = this.state.selected ? "question selected" : "question"
    return (
      <div className={classNames}>
      <div onClick={this.handleToggleSelected} style={{"border": "1px solid black", "margin": "0px", "padding": "0px 20px", "text-align": "center"}}>
        <p>{!this.state.answered ? this.props.value : this.props.answer + " (" + this.props.value + ")"}</p>

      </div>
      <div>
        {this.state.selected && <p>{this.props.question}</p>}
        {this.state.selected && !this.state.answered && awardToTeamDisplay()}
        {this.state.selected && !this.state.answered && <button onClick={this.handleAnswered}>Show Answer</button>}
        {this.state.selected && this.state.answered  && <p onClick={this.handleAnswered}>{this.props.answer}</p>}



        </div>
        </div>
    );
  }
}

export default Question;
