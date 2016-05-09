
var React = require('react');
var Card = require('./Card');

var Cards = React.createClass({
  render: function(){
    var context = this;
    var cards = this.props.cards.map(function(card, i){
      return (
        <Card id={i} 
              editCard={context.props.editCard}
              deleteCard={context.props.deleteCard}
              front={card.front}
              back={card.back} 
        />
      );
    });
    return (
      <div>
          {cards}
      </div>
    );
  }
});

module.exports = Cards;