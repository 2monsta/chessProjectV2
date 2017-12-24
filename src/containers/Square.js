import React, { Component } from 'react';
import Rook from './Rook';
import Queen from './Queen';
import King from './King';
import Knight from './Knight';
import Bishop from './Bishop';
import Pawn from './Pawn';


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

  componentDidMount() {
    const number = this.props.num;
    const darkSquares = [
      0,2,4,6,
      9,11,13,15,
      16,18,20,22,
      25, 27,29,31,
      32,34,36,38,
      41,43,45,47,
      48,50,52,54,
      57,59,61,63   
    ]
    for(let i=0; i<darkSquares.length; i++){
      if (number ==darkSquares[i]) {
        var backColor = '#D28c4d';
        this.setState({
          styles: {
            backgroundColor: backColor,
            width: '12.5%',
            height: '100px',
            display: 'inline-block'
          }
        })
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
            <span><Pawn/></span>
          </div>
        )
      }
    }
    switch(number){
      case 56:
        return( 
          <div style={this.state.styles}>
            <span><Rook/></span>
          </div>
        )
      case 57:
        return (
          <div style={this.state.styles}>
            <span><Knight/></span>
          </div>
        )
      case 58:
        return (
          <div style={this.state.styles}>
            <span><Bishop/></span>
          </div>
        )
      case 59:
        return (
          <div style={this.state.styles}>
            <span><King/></span>
          </div>
        )
      case 60:
        return (
          <div style={this.state.styles}>
            <span><Queen/></span>
          </div>
        )
      case 61:
        return (
          <div style={this.state.styles}>
            <span><Bishop /></span>
          </div>
        )
      case 62:
        return (
          <div style={this.state.styles}>
            <span><Knight /></span>
          </div>
        )
      case 63:
        return (
          <div style={this.state.styles}>
            <span><Rook /></span>
          </div>
        )
      default:
        return(
          <div style={this.state.styles}>
            <span></span>
          </div>
        )
    }
    return (
      <div style={this.state.styles}>
        <span></span>
     </div>
    );
  }
}

export default Square;
