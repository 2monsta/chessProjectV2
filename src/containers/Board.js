import React, { Component } from 'react';
import Square from './Square';



class Board extends Component {
  constructor() {
    super();
    this.state={
      board: []
    }
  }
  

  componentDidMount() {
    const arr = []
    for(let i =0; i<64; i++){
      arr.push(<Square num={i}/>)
    }
    this.setState({
      board: arr
    })
  }
  componentWillReceiveProps(nextProps) {
    // this.setState({

    // })
  }
  

  render() {
    console.log(this.state.board);
    const boards = this.state.board.map((data, index)=>{
      // console.log(data);
      return(
        <span>{data}</span>
      )
    });
    // console.log(boards);
    return (
      <div className="row">
        {boards}
      </div>
    );
  }
}

export default Board;
