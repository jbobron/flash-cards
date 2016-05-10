var React = require('react');


var ScoreBoard = React.createClass({
  render: function(){
    return (
      <div>
        <div>
          Right: {this.props.score.correct}
        </div>
        <div>
          Wrong: {this.props.score.incorrect}
        </div>
      </div>
    )
  }
});

module.exports = ScoreBoard;