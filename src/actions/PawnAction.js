export default (num)=>{
  console.log(num);
  const newPos = num - 16;
  console.log(newPos)
  return{
    type: "PAWN",
    payload: newPos
  }
}