var React = require('react');
var StyleSheet = require('react-style');


var CardNonEditMode = React.createClass({

  render: function() {
    return (
      <div id={this.props.id} styles={styles.card}>
        <div style="background-image: url(./../flashcard.jpg)" styles={styles.card.front}>
          {this.props.front}
        </div>
        <hr styles={styles.hr}></hr>
        <div styles={styles.card.back}>
          {this.props.back}
        </div>
        <button onClick={this.props.toggleEditMode} styles={styles.card.edit}>Edit</button>
      </div>
    );
  }

});

module.exports = CardNonEditMode;

var styles = StyleSheet.create({
  card: {
    'background-image': 'url(./../flashcard.jpg)',
    'height': '100px',
    'width': '200px',
    'padding': '20px',
    'margin': '20px',
    'text-align': 'center',
    'front':{
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