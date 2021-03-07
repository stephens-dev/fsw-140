import React, {useContext, useState} from 'react'
import { MainContext} from '../context/MainProvider'


export default function DisplayMap(props) {
    const { id} = props
    const {deleteTodo, updateTodo} = useContext(MainContext)
    const [toggle, setToggle] = useState(false)
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
    const {item, description, completed, } = inputs
console.log(props)
    return (
        <div >
            <div className="todo-display">
             <h1>Item: {props.item}</h1>
            <h1>Description: {props.description}</h1>
            <h1>Completed: {props.completed}</h1>
            <button className="delete-btn" onClick={() => deleteTodo(id)}>Delete</button>
            </div>

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
            <button onClick={(e) => updateTodo(e, props.id, inputs)}>Update Todo</button>
            {/* { !toggle ?
            <>
            <h1>Item: {item}</h1>
            <h1>Description: {description}</h1>
            <h1>Completed: {completed}</h1>
            <button onClick={deleteTodo}>Delete</button>
            </>
            :
            <>
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
        <p onClick={() => setToggle(prev => !prev)}>Update Todo</p>
            </>
            } */}
        </div>
    )
}