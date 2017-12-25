import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class Knight extends Component {
  constructor(props) {
    super(props);
    this.state={
      validMoves: [40,42]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    
  }
  
  render() {
    var styles = {
      position: 'absolute',
      fontSize: '50px'
    }
    return (
      <div style={styles} onClick={this.handleClick}>
        &#9816;
      </div>
    );
  }
}

export default Knight;