import React from 'react';
import TodoListItem from './todo-list-item';
import "./todo-list.css";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone, onDone }) => {
    const elements = todos.map((value, i) => {
        return (
            <li key={value.id} className='list-group-item'>
                <TodoListItem
                    onDeleted={() => onDeleted(value.id)}
                    text={value.text}
                    done={value.done}
                    important={value.important}
                    onToggleImportant={() => { onToggleImportant(value.id) }}
                    onToggleDone={() => { onToggleDone(value.id) }}
                    onDone={() => {onDone(value.id)}}
                />
            </li>
        );
    });
    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    )
};

export default TodoList;