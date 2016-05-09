var React = require('react');
var Card = require('./Card');
var AddCard = require('./AddCard');

var Home = React.createClass({
  getInitialState: function(){
    return {
      name: 'Steph Curry',
      friends: ['Klay Thompson', 'Draymond Green', 'Andre Iguodala'],
      cards: []
    }
  },
  render: function(){
    return (
      <div>
        <h1> Flipcards! </h1>
        <Card names={this.state.friends} />
        <AddCard />
      </div>
    )
  }
});

module.exports = Home;