import React from 'react';
import './header.css';

const AppHeader = ({ todoCount, doneCount }) => {
    return (
        <div className='header-style'>
            <h1>Todo List</h1>
            <div className='badges'>
                <div className='success'>
                    <span className="badge badge-pill badge-success">Done {doneCount}</span>
                </div>
                <div className='left'>
                    <span className="badge badge-pill badge-warning">Left to execute {todoCount}</span>
                </div>
            </div>
        </div>
    )
};

export default AppHeader;