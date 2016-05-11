var React = require('react');
var StyleSheet = require('react-style');


var QuizButtons = React.createClass({
  render: function(){
    return (
      <ul styles={styles.ul}>
        <li styles={styles.li}>
          <button styles={styles.greenbutton} onClick={this.props.cardCorrect}> Correct </button>
        </li>
        <li styles={styles.li}>
          <button styles={styles.redbutton} onClick={this.props.cardIncorrect}> Incorrect </button>
        </li>
        <li styles={styles.li}>
          <button styles={styles.shufflebutton} onClick={this.props.shuffleCards}> Shuffle </button>
        </li>
     </ul>
    )
  }
});

module.exports = QuizButtons;

var styles = StyleSheet.create({
  'shufflebutton':{
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
    'borderRadius': '4px',
  },
  'greenbutton':{
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
    'borderRadius': '4px',
    'background-color': 'green'
  },
  'redbutton':{
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
    'borderRadius': '4px',
    'background-color': 'red'
  },
  'ul':{
    'list-style-type': 'none',
    'margin': 0,
    'padding': 0
  },
  'li':{
    'display': 'inline'


  }
})
