import React, {useContext, useState} from 'react'
import { MainContext} from '../context/MainProvider'
import DisplayMap from './DisplayMap'


export default function Todo(props) {
    const {display} = useContext(MainContext)

    function DisplayList(props) {
        const {display, id, deleteTodo} = props
        console.log(props)
        return (
            <div>
                {display.map(item => <DisplayMap {...item} key={id} deleteTodo={deleteTodo}/> ) }
            </div>
        )
    }

    const {getdisplay} = useContext(MainContext)
    return (
        <div>
            <h1>Todo List</h1>
            <DisplayList display={display} />
            <button onClick={getdisplay} >Refresh</button>
        </div>
    )
}