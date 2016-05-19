var React = require('react');
var StyleSheet = require('react-style');

var ScoreBoard = React.createClass({
  render: function(){
    return (
      <div>
        <div>
          Right: {this.props.score.correct} Wrong: {this.props.score.incorrect}
        </div>
      </div>
    )
  }
});

module.exports = ScoreBoard;