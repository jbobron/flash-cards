var React = require('react');
var Edit = require('./Edit');
var Quiz = require('./Quiz');
var StyleSheet = require('react-style');
var _ = require('underscore');

var Container = React.createClass({
  getInitialState: function(){
    return {
      currentPage: "edit",
      cards: [{id:0, front: "front0", back:"back0"},{id:1, front: "front1", back:"back1"}, {id:2, front: "front2", back:"back2"}, {id:3, front: "front3", back:"back3"}],
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
    debugger;
  },
  deleteCard: function(id){
    for(var i = 0; i < this.state.cards.length; i++){
      if(id === this.state.cards[i].id){
        index = this.state.cards.indexOf(this.state.cards[i])
        this.state.cards.splice(index, 1);
      }
    }
    console.log("DELETE CARD", id, this.state.cards)
    this.setState({ cards: this.state.cards });
  },
  toggleEditQuizMode: function(){
    var newcurrentPage = this.state.currentPage === "edit" ? "quiz" : "edit";
    this.setState({ currentPage: newcurrentPage });
  },
  render: function(){
    var partial;
    if(this.state.currentPage === "edit"){
      console.log("container rerender with state", this.state.cards)
      partial = <Edit
                  cards={this.state.cards}
                  addCard={this.addCard}
                  editCard={this.editCard}
                  deleteCard={this.deleteCard}
                />;
    } else if(this.state.currentPage === "quiz"){
      partial = <Quiz cards={this.state.cards}/>;
    }
    return (
      <div>
       <button onClick={this.toggleEditQuizMode}>Switch to Edit/Quiz Mode</button>
        {partial}
      </div>
    );
  }
});

module.exports = Container;



// render: function(){
  //   var cards = this.state.cards.map(function(card){
  //     return <li> <p>Front:{card.front}</p> </li>;
  //   });
  //   return (
  //     <div>
  //       <h1> Flipcards! </h1>
  //       <ul>
  //         {cards}
  //       </ul>
  //       <AddCard handleAddCard={this.handleAddCard}/>
  //     </div>
  //   )
  // },