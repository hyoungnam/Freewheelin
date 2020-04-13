import { combineReducers } from 'redux';
import problemSimilar from "./problemSimilar";

const rootReducer = combineReducers({
  problemSimilar
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;