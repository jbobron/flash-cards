var React = require('react');
var ScoreBoard = require('./ScoreBoard');
var QuizCard = require('./QuizCard');
var QuizButtons = require('./QuizButtons');

var Quiz = React.createClass({
  getInitialState: function(){
    return {
      score: {correct: 0, incorrect: 0},
      incorrectPile: [],
      correctPile: [],
      numOfCardsInDeck: this.props.cards.length
    }
  },
  cardCorrect: function(){ this.state.score.correct++; this.setState({ score: this.state.score}) },
  cardIncorrect: function(){ this.state.score.incorrect++; this.setState({ score: this.state.score}) },
  render: function(){
    return (
      <div>
      	<h1> Quiz Mode! </h1>
          <ScoreBoard score={this.state.score} />
          <QuizCard />
          <QuizButtons cardCorrect={this.cardCorrect} cardIncorrect={this.cardIncorrect} />
      </div>
    )
  }
});

module.exports = Quiz;


/*
getInitialState: function(){
    return {
      isFlipped: false
    }
  },
flipCard: function(){
    this.setState({
      isFlipped: !this.state.isFlipped
    })
  },
  render: function(){
    var side = !this.state.isFlipped ? this.props.front : this.props.back;
    return (
      <div>
        <div onClick={this.flipCard} styles={styles.card}>{side}</div>
      </div>
    )
  }

*/