export default (num)=>{
//TODO: if num is the original 8 then minus 16, else just minus 8, if it reaches 0......then think about it
  
  console.log(num);
  const newPos = num - 16;
  console.log(newPos)
  return{
    type: "PAWN",
    payload: newPos
  }
}