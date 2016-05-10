var React = require('react');
var StyleSheet = require('react-style');

var CardEditMode = React.createClass({
  getInitialState: function(){
    return {
      tempFront: this.props.front,
      tempBack: this.props.back
    }
  },
  handleFrontEditModeInputChange: function(event){ this.setState({tempFront: event.target.value}); },
  handleBackEditModeInputChange: function(event){ this.setState({tempBack: event.target.value}); },
  render: function() {
    return (
      <div id={this.props.id} styles={styles.card}>
        <input onChange={this.handleFrontEditModeInputChange} value={this.state.tempFront} styles={styles.card.front}></input>
        <hr styles={styles.hr}></hr>
        <input onChange={this.handleBackEditModeInputChange} value={this.state.tempBack} styles={styles.card.back}></input>
        <button onClick={this.props.handleDone.bind(this, this.props.id, this.state.tempFront, this.state.tempBack)} styles={styles.card.edit}>Done</button>
        <button onClick={this.props.handleDelete.bind(this,this.props.id)}>Delete Card</button>
      </div>
    );
  }

});

module.exports = CardEditMode;

var styles = StyleSheet.create({
  card: {
    'background': '#ffffcc',
    'height': '100px',
    'width': '200px',
    'padding': '20px',
    'margin': '20px',
    'text-align': 'center',
    'front':{
      'color':'red'
    },
    edit:{
      'position': 'relative',
      'bottom': '-46px',
      'right': '-100px'
    }
  },
  hr: {
  'border':'none',
  'border-top':'1px dotted #f00',
  color:'#fff',
  'background-color':'#fff',
  'height':'1px',
  'width':'50%'
}
})