var React = require('react');
var StyleSheet = require('react-style');

var QuizButtons = React.createClass({
  render: function(){
    return (
      <ul styles={styles.ul}>
        <li styles={styles.li}>
          <button styles={styles.button} onClick={this.props.cardCorrect}> Correct </button>
        </li>
        <li styles={styles.li}>
          <button styles={styles.button} onClick={this.props.cardIncorrect}> Incorrect </button>
        </li>
        <li styles={styles.li}>
          <button styles={styles.buttonSecondary} onClick={this.props.shuffleCards}> Shuffle </button>
        </li>
     </ul>
    )
  }
});

module.exports = QuizButtons;

var styles = StyleSheet.create({
  'button':{
    'display': 'inline-block',
    'padding': '12px 28px',
    'margin': '5px',
    'fontSize': '18px',
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
    'borderRadius': '0px',
    'background-color': '#1798c1',
    'color': 'white'
  },
  'buttonSecondary':{
    'display': 'inline-block',
    'padding': '12px 28px',
    'margin': '5px',
    'fontSize': '18px',
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
    'border': '2px solid #1798c1',
    'borderRadius': '0px',
    'background-color': 'white',
    'color': '#1798c1',

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
