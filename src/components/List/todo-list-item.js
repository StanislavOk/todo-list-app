import React, { Component } from 'react';
import './todo-list.css';

export default class TodoListItem extends Component {

    render() {

        const { text, onDeleted, onToggleDone, onToggleImportant, done, important, onDone } = this.props;

        let classNames = 'todo-list-item';

        if (done) {
            classNames = classNames + ' done';
        }

        if (important) {
            classNames = classNames + ' important';
        }

        return (
            <div>
                <span
                    className={classNames}
                    onClick={onToggleDone}>
                    {text}
                </span>
                <div className='icons'>
                    <div className='icon-deny'>
                        <i onClick={onDeleted} className="fa fa-trash"></i>
                    </div>
                    <div class='done'>
                    <i onClick={onDone} class="fas fa-check"></i>
                    </div>
                    <div className='icon-accept'>
                        <i onClick={onToggleImportant} className="fas fa-exclamation-triangle"></i>
                    </div>
                </div>
            </div>
        )
    }
}
