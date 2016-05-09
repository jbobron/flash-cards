var React = require('react');
var Cards = require('./Cards');

var Edit = React.createClass({
  render: function(){
    return (
      <div>
        <h1> Edit Mode! </h1>
        <Cards cards={this.props.cards} editCard={this.props.editCard} deleteCard={this.props.deleteCard}/>
        <button onClick={this.props.addCard}>Add Card</button>
      </div>
    )
  }
});

module.exports = Edit;