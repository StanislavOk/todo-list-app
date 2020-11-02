import React from 'react';
import './buttons.css';

export default class Buttons extends React.Component {

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
  ]

  render() {

    const { filter, onFilterChange } = this.props;
    
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const btnClass = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button
          onClick={() => onFilterChange(name)}
          key={name} type="button"
          className={`btn ${btnClass}`}>
          {label}
        </button>
      );
    });

    return (
      <div className="btn-group" role="group" aria-label="Basic example">
        {buttons}
      </div>
    );
  }
}

