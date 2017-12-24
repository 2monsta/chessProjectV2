export default (state = [], action)=>{
  switch(action.type){
    case 'PAWN':
      return action.payload
    default:
      return state;
  }
}