import {combineReducers} from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({ // 두개의 리듀서를 combineReducers라는 유틸함수로 합쳐줌 
	counter,
	todos
});

export default rootReducer;