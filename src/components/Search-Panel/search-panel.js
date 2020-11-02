import React, { Component } from 'react';
import Buttons from '../Buttons/buttons';
import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        term: ''
    }

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    }

    render() {
        return (
            <div className='panel'>
                <input
                    className="form-control"
                    type="text"
                    placeholder='Enter the task you are looking for'
                    value={this.state.term}
                    onChange={this.onSearchChange}
                    />
                <Buttons onFilterChange={this.props.onFilterChange} filter={this.props.filter} />
            </div>
        )
    }
}

