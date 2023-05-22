import { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase,decrease } from '../modules/counter';
// import {bindActionCreators} from 'redux';

/* 
컴포넌트와 리덕스를 연동하기 위한 connect 함수 (react-redux제공)

connect(mapStateToProps, mapDispatchToProps)

mapStateToProps : 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수 
mapDispatchToProps : 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수 

connect함수를 호출하고, 다른 함수를 반환 > 반환된 함수에 컴포넌트를 파라미터로 넣어주면 리덕스와 연동된 컴포넌트가 만들어짐 

const makeContainer = connect(함수1, 함수2)
makeContainer(타깃 컴포넌트)

useSelctor(mapStateToProps)는 connect 함수 대신 사용할수 있는 hook
 */

/* 
// connect 함수 사용했을 때 
const CounterContainer = ({number, increase, decrease}) => {
	return (
		<Counter number={number} onIncrease={increase} onDecrease={decrease} />
	);

	export default connect(
	(state) => ({ 
	number: state.counter.number,
}),
 { //두번째 파라미터를 객체형태로 넣어주면, 알아서 connect함수가 binding해줌
	increase,
	decrease,
 },
)(CounterContainer);
}; */

//useSelecter사용했을 때 
const CounterContainer = () => {
	const number = useSelector(state => state.counter.number);
	const dispatch = useDispatch();
	const onIncrease = useCallback(()=> dispatch(increase()), [dispatch]);// 컴포넌트 성능 최적화 위해 use콜백dmfh dispatch를 감싸기
	const onDecrease = useCallback(()=> dispatch(decrease()), [dispatch]);
	return (
		<Counter
			number={number}
			onIncrease={onIncrease}
			onDecrease={onDecrease}
			/>
	);
};
export default CounterContainer;

/*const mapStateToProps = (state) => ({ //state는 현재 스토어가 지니고 있는 상태
	number: state.counter.number,
})

const mapDispatchToProps = (dispatch) => ({
	 increase : ()=>{
		dispatch(increase());
	 },
	 decrease: () => {
		dispatch(decrease());
	 },
})*/



/*  

export default connect( //두가지 함수를 합치고
	mapStateToProps,
	mapDispatchToProps,
)(CounterContainer);//반환된 함수에 컴포넌트를 파라미터로 넣어주면 리덕스와 연동된 컴포넌트가 만들어짐 


connect 함수 사용시 내부에 익명함수 형태로 선언해도 무방

export default connect(
	(state) => ({ 
	number: state.counter.number,
}),
 (dispatch) => ({
	 increase : ()=>{
		dispatch(increase());
	 },
	 decrease: () => {
		dispatch(decrease());
	 },
}),
)(CounterContainer);

	
	*/