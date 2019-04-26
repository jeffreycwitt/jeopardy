import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Question from './Question';
import Team from './Team';

class App extends Component {
  constructor(props){
    super(props)
    this.handleAwardPoints = this.handleAwardPoints.bind(this)
    this.handleEditTeam = this.handleEditTeam.bind(this)
    this.handleLoadGame = this.handleLoadGame.bind(this)
    this.loadGame = this.loadGame.bind(this)
    this.state = {
      teams: [
        {
          "name": "team1",
          "score": 0,
        },
        {
          "name": "team2",
          "score": 0,
        }
      ],
      questions: [],
      game: "data/test.json"
    }
  }
  handleEditTeam(team, value, data){
    console.log("test", team, value, data)
    this.setState((prevState) => {
      const currentTeam = prevState.teams.filter((t) => t.name === team)[0]
      if (value === "score"){
        currentTeam.score = parseInt(data)
      }
      else if (value === "team"){
        currentTeam.name = data
      }
      return {
        teams: [...prevState.teams]
      }
    })
  }
  handleAwardPoints(team, points, correct){

    this.setState((prevState) => {
      const currentTeam = prevState.teams.filter((t) => t.name === team)[0]

      currentTeam.score = correct ? currentTeam.score + points : currentTeam.score - points
      return {
        teams: [...prevState.teams]
      }
    })
  }
  handleLoadGame(e){
    e.preventDefault();
    const game = this.refs.game.value
    this.setState({game: game})
    this.loadGame(game)
  }
  loadGame(url){
    Axios.get(url).then((res) => {
      this.setState({questions: res.data.questions})
    });
  }
  componentDidMount(){
    this.loadGame(this.state.game)
  }
  render() {
    const displayAllColumns = () => {
      const categories = this.state.questions.map((q) => {
        return q.category
      })
      //filter for unique values only, checks to see if the index of the value is the first occuring
      //https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
      // v = value, i= index, a = self/array
      const filteredCategories = categories.filter((v, i, a) => a.indexOf(v) === i);
      const columns = filteredCategories.map((c) => {
        return displayColumn(c)
      })
      return columns
    }
    const displayColumn = (columnid) => {
      const displayArray = this.state.questions.map((q) => {
        if (q.category === columnid)
        {
          return <Question value={q.value} question={q.question} answer={q.answer} handleAwardPoints={this.handleAwardPoints} teams={this.state.teams}/>
        }
      })
      return (
        <div className="column">
        <div>{columnid}</div>
        {displayArray}
        </div>
      )
    }
    const displayTeamScores = () => {
      const teamArray = this.state.teams.map((t) => {
        return (
          <Team name={t.name} score={t.score} handleEditTeam={this.handleEditTeam}/>


        )
      })
      return teamArray
    }
    return (
      <div>
      <div className="header">
      <span id="title">Jeopardy</span>
      <form onSubmit={this.handleLoadGame}><input type="text" placeholder="game url" ref="game"/><button>Load Game</button></form>
      <div id="teamWrapper">
      {displayTeamScores()}
      </div>

      </div>
      <div className="App">
      {displayAllColumns()}
      </div>
      </div>
    );
  }
}

export default App;
