var React = require('react');
var Edit = require('./Edit');
var Quiz = require('./Quiz');
var StyleSheet = require('react-style');
var _ = require('underscore');

var Container = React.createClass({
  getInitialState: function(){
    return {
      currentPage: "edit",
      cards: [{id:0, front: "yellow", back:"amarillo"},{id:1, front: "pink", back:"rosa"}, {id:2, front: "red", back:"rojo"}, {id:3, front: "orange", back:"naranja"}],
      idCounter: 4
    }
  },
  addCard: function(){
    var newCard = {id: this.state.idCounter, front:"", back:""};
    this.state.cards.push(newCard);
    this.setState({  cards: this.state.cards  });
    this.state.idCounter++;
  },
  editCard: function(id, newFront, newBack){
    for(var i = 0; i < this.state.cards.length; i++){
      if(id === this.state.cards[i].id){
        this.state.cards[i].front = newFront;
        this.state.cards[i].back = newBack;
      }
    }
    this.setState({ cards: this.state.cards });
  },
  deleteCard: function(id){
    for(var i = 0; i < this.state.cards.length; i++){
      if(id === this.state.cards[i].id){
        index = this.state.cards.indexOf(this.state.cards[i])
        this.state.cards.splice(index, 1);
      }
    }
    this.setState({ cards: this.state.cards });
  },
  toggleEditQuizMode: function(){
    var newcurrentPage = this.state.currentPage === "edit" ? "quiz" : "edit";
    this.setState({ currentPage: newcurrentPage });
  },
  render: function(){
    var partial;
    if(this.state.currentPage === "edit"){
      partial = <Edit
                  cards={this.state.cards}
                  addCard={this.addCard}
                  editCard={this.editCard}
                  deleteCard={this.deleteCard}
                />;
    } else if(this.state.currentPage === "quiz"){
      partial = <Quiz cards={this.state.cards} toggleEditQuizMode={this.toggleEditQuizMode}/>;
    }
    return (
      <div>
       <button styles={styles.button} onClick={this.toggleEditQuizMode}>Switch to Edit/Quiz Mode</button>
        {partial}
      </div>
    );
  }
});

module.exports = Container;

var styles = StyleSheet.create({
  'button': {
    'display': 'inline-block',
    'padding': '6px 12px',
    'margin': '5px',
    'fontSize': '14px',
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
  }
});