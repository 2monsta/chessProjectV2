export default (num)=>{
//TODO: if num is the original 8 then minus 16, else just minus 8, if it reaches 0......then think about it
	const originalPos = [
		48, 49, 50, 51, 52, 53, 54, 55
	]
	var newPos;
	console.log(num);
 	for(let i =0; i< originalPos.length; i++){
		if(num === originalPos[i]){
			newPos = num - 16;
			console.log(newPos);
			break;
	 	}
		else if(num !==originalPos[i]){
			newPos = num - 8;
			// break;
		}
 }
	console.log(newPos)
	return{
		type: "PAWN",
		payload: newPos
	}
}