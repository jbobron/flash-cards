var React = require('react');
var ScoreBoard = require('./ScoreBoard');
var QuizCard = require('./QuizCard');
var QuizButtons = require('./QuizButtons');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var StyleSheet = require('react-style');
var _ = require('underscore');

var Quiz = React.createClass({
  getInitialState: function(){
    return {
      score: {correct: 0, incorrect: 0},
      incorrectPile: [],
      correctPile: [],
      numOfCardsInDeck: this.props.cards.length,
      currentCardIndex: 0,
      copyOfDeck: this.props.cards,
      isFlipped: false,
      isModalOpen: false,
      isShuffleModalOpen: false
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
    if(this.isGameDone()) this.openModal();
    if(this.state.isFlipped) this.flipCard();
  },
  cardIncorrect: function(){ 
    this.state.score.incorrect++; 
    this.setState({ score: this.state.score});
    this.state.currentCardIndex++;
    if(this.isGameDone()) this.openModal();
    if(this.state.isFlipped) this.flipCard();
  },
  isGameDone: function(){
    return this.state.numOfCardsInDeck <= this.state.currentCardIndex;
  },
  shuffleCards: function(){
    if(this.state.currentCardIndex !== 0){
      this.openShuffleModal();
      return;
    } 
    var shuffledCards = _.shuffle(this.state.copyOfDeck);
    this.setState({copyOfDeck: shuffledCards});
  },
  openShuffleModal: function() {
      this.setState({ isShuffleModalOpen: true });
  },
  closeShuffleModal: function() {
      this.setState({ isShuffleModalOpen: false });
  },
  openModal: function() {
      this.setState({ isModalOpen: true });
  },
  closeModal: function() {
      this.setState({ isModalOpen: false });
      this.props.toggleEditQuizMode();
  },
  calcPercentCorrect: function(){
    return this.state.score.correct / (this.state.score.correct + this.state.score.incorrect)*100;
  },
  render: function(){
    var percentCorrect = this.calcPercentCorrect();
    return (
      <div styles={styles.quizmode}>
        <div styles={(this.state.isModalOpen) ? styles.blur : {}}>
        <h1> Quiz Mode </h1>
          <ScoreBoard score={this.state.score} />
          <QuizCard isFlipped={this.state.isFlipped} flipCard={this.flipCard} cards={this.state.copyOfDeck} currentCardIndex={this.state.currentCardIndex} numOfCardsInDeck={this.state.numOfCardsInDeck}/>
          <QuizButtons cardCorrect={this.cardCorrect} cardIncorrect={this.cardIncorrect} shuffleCards={this.shuffleCards}/>
        </div>
          <Modal isOpen={this.state.isModalOpen}
                 transitionName="modal-anim">
            <h3>Good Job!</h3>
            <div className="body">
              <p>You got {this.state.score.correct} correct and {this.state.score.incorrect} incorrect.  That is {this.calcPercentCorrect()}% correct!</p>
            </div>
            <button onClick={this.closeModal}>Close modal</button>
          </Modal>

          <Modal isOpen={this.state.isShuffleModalOpen}
                 transitionName="modal-anim">
            <h3>Attention</h3>
            <div className="body">
              <p>Must shuffle before starting quiz</p>
            </div>
            <button onClick={this.closeShuffleModal}>Close modal</button>
          </Modal>
      </div>
    )
  }
});


var Modal = React.createClass({
    render: function() {
        if(this.props.isOpen){
            return (
              <ReactCSSTransitionGroup transitionName={this.props.transitionName}>
                <div className="modal">
                  {this.props.children}
                </div>
              </ReactCSSTransitionGroup>
            );
        } else {
            return <ReactCSSTransitionGroup transitionName={this.props.transitionName} />;
        }
    }
});

var styles = StyleSheet.create({
  'quizmode': {
    'margin': '0 auto',
    'text-align': 'center'
  },
  'blur': {
    'box-shadow': '0px 0px 20px 20px rgba(255,255,255,1)',
    'text-shadow': '0px 0px 10px rgba(51, 51, 51, 0.9)',
    'transform': 'scale(0.9)',
    'opacity': '0.6'
  }
})


module.exports = Quiz;
