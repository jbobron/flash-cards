var React = require('react');
var StyleSheet = require('react-style');


var CardNonEditMode = React.createClass({

  render: function() {
    return (
      <div id={this.props.id} styles={styles.card}>
        <div styles={styles.cardContent}>
          <div styles={styles.card.front}>
            {this.props.front}
          </div>
          <hr styles={styles.hr}></hr>
          <div styles={styles.card.back}>
            {this.props.back}
          </div>
        </div>
        <button onClick={this.props.toggleEditMode} styles={styles.button}>Edit</button>
      </div>
    );
  }

});

module.exports = CardNonEditMode;

var styles = StyleSheet.create({
  'card': {
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
    },
    'front':{},
  },
  'hr': {
    'border':'none',
    'border-top':'1px dotted black',
    'color':'#fff',
    'background-color':'#fff',
    'height':'1px',
    'width':'50%'
  },
  'cardContent':{
      'min-height': '39px'
  },
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
    'borderRadius': '0px'
  }
});