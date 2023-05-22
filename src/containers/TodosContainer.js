import React, { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Todos from "../components/Todos";
import useAction from "../lib/useAction";
import todos, { changeInput, insert, toggle, remove } from "../modules/todos";

/* const TodosContainer = ({input, todos, changeInput, insert, toggle, remove}) => {
	return (
		<Todos input={input} todos={todos} onChangeInput={changeInput} onInsert={insert} onToggle={toggle} onRemove={remove} />
	);
};

export default connect(
	//비구조화 할당을 통해 todos를 분리하여 
	//state.todos.input대신 todos.input을 사용
	({todos}) => ({
		input: todos.input,
		todos: todos.todos,
	}),
	{
		changeInput,
		insert,
		toggle,
		remove,
	},
)(TodosContainer); */

const TodosContainer = () =>{
	const { input, todos } = useSelector(({todos}) => ({
		input :todos.input, 
		todos : todos.todos
	}));
	
	const [onChangeInput, onInsert, onToggle, onRemove] = useAction(
		[changeInput, insert, toggle, remove],
		[]
	);

	return (
		<Todos
			input={input}
			todos={todos}
			onChangeInput={onChangeInput}
			onInsert={onInsert}
			onToggle={onToggle}
			onRemove={onRemove}
		/>
	)
}

export default React.memo(TodosContainer); // react.memo => 부모컨포넌트 App이  리렌더링되면 투두컨테이너 컴포넌트의 props가 바뀌지 않는 한 해당 컴포넌트가 자동 리렌더링 되지 않도록 함 