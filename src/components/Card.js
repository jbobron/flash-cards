var React = require('react');
var StyleSheet = require('react-style');
var CardNonEditMode = require('./CardNonEditMode');
var CardEditMode = require('./CardEditMode');

var Card = React.createClass({
  getInitialState: function(){
    return {
      inEditMode: false
    }
  },
  toggleEditMode: function(){ 
    this.setState({ inEditMode: !this.state.inEditMode });

  },
  handleDone: function(id, front, back){
    this.toggleEditMode();
    this.props.editCard(id, front, back);
  },
  handleDelete:function(id){
    this.toggleEditMode();
    this.props.deleteCard(id);
  },
  render: function(){
    if(!this.state.inEditMode){
      return (
          <CardNonEditMode front={this.props.front} 
                           back={this.props.back} 
                           id={this.props.id} 
                           styles={styles.card}
                           toggleEditMode={this.toggleEditMode}
                           />
      )
    } else { //in edit mode
      return (
          <CardEditMode front={this.props.front} 
                        back={this.props.back} 
                        id={this.props.id}
                        handleDelete={this.handleDelete}
                        handleDone={this.handleDone}
                        toggleEditMode={this.toggleEditMode}
                        styles={styles.card} 
                        />
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

