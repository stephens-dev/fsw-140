import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div className="navbar">
            <Link to="/">Todo's</Link>
            <Link to="/addtodo">Add Todo</Link>
        </div>
    )
}