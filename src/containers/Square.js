import React, { Component } from 'react';

class Square extends Component {
  constructor() {
    super();
    this.state={
      styles:{
        backgroundColor:'white',
        width: '12.5%',
        height:'100px',
        display:'inline-block'
      }
    }
  }
  render() {
    // console.log(this.props.num);
    const number = this.props.num;
    for(let i =48; i<56; i++){
      if(number === i){
        return (
          // this needs to be a pawn class
          <div style={this.state.styles}>
            <span>Pawn</span>
          </div>
        )
      }
    }
    return (
      <div style={this.state.styles}>
        <span>Check</span>
     </div>
    );
  }
}

export default Square;
