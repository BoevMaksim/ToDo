import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ( {filter, onFilterChange} ) => {
    const buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];

    const button = buttons.map(( {name, label}) => {
        const isActiv = filter === name;
        const clazz = isActiv ? 'btn-info' : 'btn-outline-secondary';
                return  (
                <button key={name} type="button"
                className={`btn ${clazz}`}
                onClick = {() => onFilterChange(name)} >
                {label}</button>
                );
            });
   
    return (
      <div className="btn-group">
        {button}
      </div>
    );
};

export default ItemStatusFilter