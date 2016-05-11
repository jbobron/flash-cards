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
      numOfCardsInDeck: this.props.cards.length,
      currentCardIndex: 0,
      isFlipped: false
    }
  },
  flipCard: function(){
    this.setState({
      isFlipped: !this.state.isFlipped
    })
  },
  cardCorrect: function(){ 
    this.state.score.correct++; 
    this.setState({ score: this.state.score});
    this.state.currentCardIndex++;
    this.isGameDone();
    if(this.state.isFlipped) this.flipCard();
  },
  cardIncorrect: function(){ 
    this.state.score.incorrect++; 
    this.setState({ score: this.state.score});
    this.state.currentCardIndex++;
    this.isGameDone();
    if(this.state.isFlipped) this.flipCard();
  },
  isGameDone: function(){
    if(this.state.numOfCardsInDeck <= this.state.currentCardIndex){
      var correct = this.state.score.correct;
      var incorrect = this.state.score.incorrect;
      alert("Game over! You got "+ correct+ " correct and " + incorrect+ " incorrect.  That is %"+(correct/(correct+incorrect))*100+ " correct!");
      //this.showSummary();
      this.props.toggleEditQuizMode();
    }
  },
  render: function(){
    return (
      <div>
      	<h1> Quiz Mode! </h1>
          <ScoreBoard score={this.state.score} />
          <QuizCard isFlipped={this.state.isFlipped} flipCard={this.flipCard} cards={this.props.cards} currentCardIndex={this.state.currentCardIndex}/>
          <QuizButtons cardCorrect={this.cardCorrect} cardIncorrect={this.cardIncorrect} />
      </div>
    )
  }
});

module.exports = Quiz;


