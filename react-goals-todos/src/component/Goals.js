import { useRef } from 'react';
import { connect } from 'react-redux';
import { handleAddGoal, handleDeleteGoal } from '../actions/goals';
import List from './List';

const Goals = (props) => {
    const inputRef = useRef();

    const addItem = (event) => {
        event.preventDefault();

        props.dispatch(handleAddGoal(
            inputRef.current.value,
            () => (inputRef.current.value = '')
        ));
    }

    const removeItem = (goal) => {
        props.dispatch(handleDeleteGoal(goal));
    }

    return (
        <div>
            <h1>Goals</h1>
            <input type="text" placeholder='Add Goal' ref={inputRef}/>
            <button onClick={addItem}>Add Goal</button>
            <List items={props.goals} remove={removeItem} />
        </div>
    )
}

export default connect((state) => ({
    goals: state.goals
}))(Goals);