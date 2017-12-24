import React, { Component } from 'react';
import Rook from './Rook';
import Queen from './Queen';
import King from './King';
import Knight from './Knight';
import Bishop from './Bishop';
import Pawn from './Pawn';
import {connect} from 'react-redux';

class Square extends Component {
  constructor() {
    super();
    this.state={
      styles:{
        backgroundColor:'white',
        width: '12.5%',
        height:'100px',
        display:'inline-block'
      },
      currnetPawnPos:[
         48,
        49,
        50,
        51,
       52,
        53,
        54,
        55
      ]

    }
  }
  //TODO: update state depending on the number will cause a re render and move the
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
  
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.newPawnPos);
    var arr =[];
    this.state.currnetPawnPos.map((pos, index)=>{
      if((pos-16) === nextProps.newPawnPos){
        arr.push(nextProps.newPawnPos);
      }else{
        arr.push(pos);
      }
    })
    console.log(arr);
    this.setState({
      currnetPawnPos: arr
    })
  }
  

  render() {
    // console.log(this.props.num);
    const number = this.props.num;
    const pawnOne = this.state.currnetPawnPos[0];
    const pawnTwo = this.state.currnetPawnPos[1];
    const pawnThree = this.state.currnetPawnPos[2];
    const pawnFour = this.state.currnetPawnPos[3];
    const pawnFive = this.state.currnetPawnPos[4];
    const pawnSix = this.state.currnetPawnPos[5];
    const pawnSeven = this.state.currnetPawnPos[6];
    const pawnEight = this.state.currnetPawnPos[7];
    switch(number){
      case pawnOne:
        return( 
          <div style={this.state.styles}>
            <span><Pawn pawnNum={pawnOne}/></span>
          </div>
        )
      case pawnTwo:
        return( 
          <div style={this.state.styles}>
            <span><Pawn pawnNum={pawnTwo}/></span>
          </div>
        )
      case pawnThree:
        return( 
          <div style={this.state.styles}>
            <span><Pawn pawnNum={pawnThree}/></span>
          </div>
        )
        case pawnFour:
        return( 
          <div style={this.state.styles}>
            <span><Pawn pawnNum={pawnFour}/></span>
          </div>
        )
      case pawnFive:
        return( 
          <div style={this.state.styles}>
            <span><Pawn pawnNum={pawnFive}/></span>
          </div>
        )
      case pawnSix:
        return( 
          <div style={this.state.styles}>
            <span><Pawn pawnNum={pawnSix}/></span>
          </div>
        )
      case pawnSeven:
        return( 
          <div style={this.state.styles}>
            <span><Pawn pawnNum={pawnSeven}/></span>
          </div>
        )
      case pawnEight:
        return( 
          <div style={this.state.styles}>
            <span><Pawn pawnNum={pawnEight}/></span>
          </div>
        )
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

function mapStateToProps(state){
  return {
    newPawnPos: state.pawn
  }
}

// export default Square;
export default connect(mapStateToProps)(Square);
