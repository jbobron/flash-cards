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
        <input onChange={this.handleBackEditModeInputChange} value={this.state.tempBack} styles={styles.card.back}></input><br></br>
        <button onClick={this.props.handleDone.bind(this, this.props.id, this.state.tempFront, this.state.tempBack)} styles={styles.button}>Done</button>
        <button onClick={this.props.handleDelete.bind(this,this.props.id)} styles={styles.button}>Delete Card</button>
      </div>
    );
  }

});

module.exports = CardEditMode;

var styles = StyleSheet.create({
  card: {
    'background': '#F8F8F8',
    'height': '100px',
    'width': '200px',
    'padding': '20px',
    'margin': '20px',
    'text-align': 'center',
    'edit':{
      'position': 'relative',
      'bottom': '-46px',
      'right': '-100px'
    }
  },
  'hr': {
    'border':'none',
    'border-top':'1px dotted black',
    'color':'#fff',
    'background-color':'#fff',
    'height':'1px',
    'width':'50%'
  },
  'button': {
    'display': 'inline-block',
    'padding': '6px 12px',
    'margin': '5px',
    'margin-top':'20px',
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
    'borderRadius': '0px'
  }
});
