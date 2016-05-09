var React = require('react');
var Edit = require('./Edit');
var Quiz = require('./Quiz');
var StyleSheet = require('react-style');
var _ = require('underscore');

var Container = React.createClass({
  getInitialState: function(){
    return {
      currentPage: "edit",
      cards: [{front: "front0", back:"back0"},{front: "front1", back:"back1"}, {front: "front2", back:"back2"}, {front: "front3", back:"back3"}]
    }
  },
  addCard: function(){
    var newCard = {front:"", back:""};
    this.state.cards.push(newCard);
    this.setState({  cards: this.state.cards  });
  },
  editCard: function(id, newFront, newBack){
    this.state.cards[id].front = newFront;
    this.state.cards[id].back = newBack;
    this.setState({ cards: this.state.cards });
  },
  deleteCard: function(id){
    console.log("DELETING", id, this.state.cards[id])
    this.state.cards.splice(id, 1);
    this.setState({ cards: this.state.cards });
    console.log(this.state.cards)
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