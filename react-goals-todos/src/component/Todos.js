import { useRef } from 'react';
import { connect, Connect } from 'react-redux';
import { handleAddTodo, handleDeleteTodo, handleToggle } from '../actions/todos';
import List from './List';

const Todos = (props) => {
    const inputRef = useRef();

    const addItem = (event) => {
        event.preventDefault();

        props.dispatch(handleAddTodo(
            inputRef.current.value,
            () => (inputRef.current.value = '')
        ));
    }

    const removeItem = (todo) => {
        props.dispatch(handleDeleteTodo(todo));
    }

    const toggleItem = (todo) => {
        props.dispatch(handleToggle(todo.id));
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" placeholder='Add Todo' ref={inputRef} />
            <button onClick={addItem}>Add Todo</button>
            <List items={props.todos} remove={removeItem} toggle={toggleItem}/>
        </div>
    )
}

export default connect((state) => ({
    todos: state.todos
}))(Todos);