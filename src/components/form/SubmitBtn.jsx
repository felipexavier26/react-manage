import React from 'react';
import './submitbtn.css';

function SubmitBtn({ text }) {
    return (
        <div>
            <button className='btnLink'>
                {text}
            </button>

        </div>
    );
}

export default SubmitBtn;
