import { createAction } from "@reduxjs/toolkit";
import { handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE'; //액션 타입정의 > '모듈이름/액션이름' 
const DECREASE = 'counter/DECREASE';

//액션 생성 함수 
export const increase = createAction(INCREASE); //redux-actions으로 함
export const decrease = () => ({ type : DECREASE });  // export는 여러개 내보낼수있음

const initialState = { //counter모듈의 초기 상태
	number : 0 
};


/*  function counter(state = initialState, action) { //export default 리듀서 함수
	//export default는 단 하나만 내보낼수 있음
	switch(action.type){
		case INCREASE:
			return{
				number : state.number + 1
			};
		case DECREASE:
			return{
				number: state.number - 1
			};
		default:
			return state;
	}
}  */

//위 함수를 redux-action (redux-toolkit)으로 재현
const counter = handleActions(
	{
		[INCREASE]: (state, action)=>({number: state.number + 1}),
		[DECREASE]: (state, action)=>({number: state.number - 1}),
	},
	initialState,
) 

export default counter;