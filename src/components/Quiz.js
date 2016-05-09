var React = require('react');


var Quiz = React.createClass({
  render: function(){
    return (
      <div>
      	<h1> Quiz Mode! </h1>
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