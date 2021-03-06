import React, {useState, useContext} from 'react'
import {MainContext} from '../context/MainProvider'

export default function AddTodos(props) {

const initInputs = {
    item: "",
    description: "",
    completed: Boolean
}


const [inputs, setInputs] = useState(initInputs)
const {addTodo, newTodo} = props


function handleChange(e) {
   const {name, value} = e.target
   setInputs(prevInputs => ({
       ...prevInputs,
       [name]: value
   }))
}

function handleSubmit(e) {
    e.preventDefault()
    addTodo(inputs)
    setInputs(initInputs)
    console.log(inputs)
}
const {item, description, completed} = inputs

return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            onChange={handleChange} 
            value={item} 
            name="item" 
            placeholder="item"/>
            <input type="text" 
            onChange={handleChange} 
            value={description} 
            name="description" 
            placeholder="description"/>
            <input type="text" 
            onChange={handleChange} 
            value={completed} 
            name="completed" 
            placeholder="completed"/>
        </form>
        <button onClick={handleSubmit}>Submit</button>
    </div>
)
}