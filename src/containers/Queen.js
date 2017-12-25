import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class Queen extends Component {
  render() {
    var styles = {
      position: 'absolute',
      fontSize: '50px'
    }
    return (

      <div style={styles}>
        &#9813;
      </div>
    );
  }
}

export default Queen;