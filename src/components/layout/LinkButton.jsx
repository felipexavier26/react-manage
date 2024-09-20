import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'


function LinkButton({ to, text }) {
    return (
        <>
            <Link className='btnLink' to={to}>{text}</Link>
        </>
    )
}

export default LinkButton