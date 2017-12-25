import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class Knight extends Component {
  render() {
    var styles = {
      position: 'absolute',
      fontSize: '50px'
    }
    return (
      <div style={styles}>
        &#9816;
      </div>
    );
  }
}

export default Knight;