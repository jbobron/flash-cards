var React = require('react');
var StyleSheet = require('react-style');

var QuizCard = React.createClass({
  render: function(){
    var side;
    if(this.props.numOfCardsInDeck <= this.props.currentCardIndex){
      side = this.props.cards[this.props.currentCardIndex-1].front
    } else {
      side = !this.props.isFlipped ? this.props.cards[this.props.currentCardIndex].front : this.props.cards[this.props.currentCardIndex].back;
    }
    return (
      <div>
        <div onClick={this.props.flipCard} styles={styles.card}>{side}</div>
      </div>
    )
  }
});

module.exports = QuizCard;

var styles = StyleSheet.create({
  card: {
    // 'background-image': 'url(./../flashcard.jpg)',
    'font-size': '36px',
    'background': '#F8F8F8',
    'height': '200px',
    'line-height': '200px',
    'width': '400px',
    'padding': '20px',
    'margin': '0 auto',
    'margin-top':'50px',
    'margin-bottom': '50px',
    'text-align': 'center',
    'front':{
      // 'color':'red'
    },
    cardText: {
      'margin': '0 auto',
      'display': 'inline-block'
    },
    edit:{
      'position': 'relative',
      'bottom': '-46px',
      'right': '-100px'
    }
  },
  hr: {
    'border':'none',
    'border-top':'1px dotted #f00',
    color:'#fff',
    'background-color':'#fff',
    'height':'1px',
    'width':'50%'
  }
});