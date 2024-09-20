import React from 'react';
import './input.css';

function Input({ type, name, placeholder, handleOnchange, value, text }) {
    return (
        <div className='form_control'>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handleOnchange}  
                value={value} 
                required
            />
        </div>
    );
}

export default Input;
