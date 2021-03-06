import React, {useContext, useState} from 'react'
import { MainContext} from '../context/MainProvider'


export default function DisplayMap(props) {
    const {item, description, completed, id} = props
    const {deleteTodo} = useContext(MainContext)

    return (
        <div className="todo-display">
            <h1>Item: {item}</h1>
            <h1>Description: {description}</h1>
            <h1>Completed: {completed}</h1>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}