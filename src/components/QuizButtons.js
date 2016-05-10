var React = require('react');


var QuizButtons = React.createClass({
  render: function(){
    return (
      <div>
        <div>
          <button onClick={this.props.cardCorrect}> Correct </button>
        </div>
        <div>
          <button onClick={this.props.cardIncorrect}> Incorrect </button>
        </div>
      </div>
    )
  }
});

module.exports = QuizButtons;

