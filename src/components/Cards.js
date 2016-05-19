var React = require('react');
var Card = require('./Card');
var StyleSheet = require('react-style');

var Cards = React.createClass({
  render: function(){
    var context = this;
    var cards = this.props.cards.map(function(card, i){
      return (
        <Card id={card.id} 
              editCard={context.props.editCard}
              deleteCard={context.props.deleteCard}
              front={card.front}
              back={card.back} 
        />
      );
    });
    return (
      <div styles={styles.container}>
          {cards}
          <button styles={styles.addButton} onClick={this.props.addCard}>Add Card</button>
      </div>
    );
  }
});

module.exports = Cards;


var styles = StyleSheet.create({
'button': {
    'position': 'relative',
    'bottom': '-32px',
    'right': '-99px',
    'display': 'inline-block',
    'padding': '6px 12px',
    'margin': '5px',
    'fontSize': '10px',
    'fontWeight': '400',
    'lineHeight': '1.42857143',
    'textAlign': 'center',
    'whiteSpace': 'nowrap',
    'verticalAlign': 'middle',
    'MsTouchAction': 'manipulation',
    'touchAction': 'manipulation',
    'cursor': 'pointer',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none',
    'backgroundImage': 'none',
    'border': '1px solid transparent',
    'borderRadius': '4px'
  },
  'addButton': {
    'display': 'inline-block',
    'padding': '12px 12px',
    'margin': '5px',
    'height': '100px',
    'width': '100px',
    'border-radius': '100px',
    'position': 'relative',
    'margin': '39px',
    'margin-left': '85px',
    'outline': '0'
  },
  'container':{
    'display': 'flex',
    'flex-flow': 'row wrap'
  }

})