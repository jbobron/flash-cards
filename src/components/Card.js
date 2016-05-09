var React = require('react');
var StyleSheet = require('react-style');

var Card = React.createClass({
  getInitialState: function(){
    return {
      inEditMode: false,
      tempFront: this.props.front,
      tempBack: this.props.back
    }
  },
  toggleEditMode: function(){
    this.setState({ inEditMode: !this.state.inEditMode });
  },
  handleFrontEditModeInputChange: function(event){
    this.setState({tempFront: event.target.value});
  },
  handleBackEditModeInputChange: function(event){
    this.setState({tempBack: event.target.value});
  },
  handleDone: function(id, front, back){
    this.toggleEditMode();
    this.props.editCard(id, front, back);
  },
  render: function(){
    if(!this.state.inEditMode){
      return (
        <div id={this.props.id} styles={styles.card}>
          <div styles={styles.card.front}>
            {this.props.front}
          </div>
          <hr styles={styles.hr}></hr>
          <div styles={styles.card.back}>
            {this.props.back}
          </div>
          <button onClick={this.toggleEditMode} styles={styles.card.edit}>Edit</button>
        </div>
      )
    } else { //in edit mode
      return (
        <div id={this.props.id} styles={styles.card}>
          <input onChange={this.handleFrontEditModeInputChange} value={this.state.tempFront} styles={styles.card.front}></input>
          <hr styles={styles.hr}></hr>
          <input onChange={this.handleBackEditModeInputChange} value={this.state.tempBack} styles={styles.card.back}></input>
          <button onClick={this.handleDone.bind(this, this.props.id, this.state.tempFront, this.state.tempBack)} styles={styles.card.edit}>Done</button>
        </div>
        )
    }
  }
});

module.exports = Card;

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

