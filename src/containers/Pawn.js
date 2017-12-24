import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PawnAction from '../actions/PawnAction';
class Pawn extends Component {

  constructor(props) {
    super(props);
    this.handleMove = this.handleMove.bind(this);
  }
  
  handleMove(){
    this.props.move(this.props.pawnNum);
  }
  render() {
    var styles = {
      position: 'absolute'
    }

    return (
      <div onClick={this.handleMove} style={styles}>
        	&#9817;
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    move: PawnAction
  },dispatch)
}

export default connect(null, mapDispatchToProps)(Pawn);
// export default Pawn;