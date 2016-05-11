var React = require('react');
var StyleSheet = require('react-style');


var QuizCard = React.createClass({
  render: function(){
    console.log("isFlipped", this.props.isFlipped)
    var side = !this.props.isFlipped ? this.props.cards[this.props.currentCardIndex].front : this.props.cards[this.props.currentCardIndex].back;
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
    'background': '#ffffcc',
    'height': '100px',
    'width': '200px',
    'padding': '20px',
    'margin': '20px',
    'text-align': 'center',
    'front':{
      'color':'red'
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
})

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