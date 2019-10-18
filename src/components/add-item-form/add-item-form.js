import React, {useState} from 'react';

import './add-item-form.css';

const AddItemForm = ( {onAddedItem} ) => {

    const [label, setLabel] = useState ('');

    const onLabelChange = (e) => {
        setLabel(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onAddedItem(label);
        setLabel('');
    };

        return(
            <form className='add-item-form d-flex'
                onSubmit = {onSubmit} >
                <input  type = 'text'
                    className = 'form-control'
                    onChange = {onLabelChange}
                    placeholder = 'What needs to be done'
                    value = {label}
                    required />
                <button className='btn btn-outline-secondary' >
                    Add Item
                </button>
            </form>
        )
};

export default AddItemForm