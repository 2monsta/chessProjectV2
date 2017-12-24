import {combineReducers} from 'redux';
import PawnReducer from './PawnReducer';


const rootReducer = combineReducers({
  pawn: PawnReducer
});

export default rootReducer;