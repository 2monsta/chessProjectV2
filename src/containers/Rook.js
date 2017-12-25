import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RookAction from '../actions/RookAction'

class Rook extends Component {
  constructor(props) {
    super(props);
    this.handleMove = this.handleMove.bind(this);
    this.state={
      validMoves: []
    }
  }
  handleMove()  {
    var oldPos = this.props.rookNum;
    
  }
  render() {
    var styles = {
      position: 'absolute',
      fontSize: '50px'
    }
    return (
      <div style={styles} onClick={this.handleMove}>
        &#9814;
      </div>
    );
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    move: RookAction
  },dispatch);
}
export default connect(null, mapDispatchToProps)(Rook);
// export default Rook;