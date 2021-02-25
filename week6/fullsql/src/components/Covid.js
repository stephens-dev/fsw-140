import React, {useContext, useState} from 'react'
import { MainContext} from '../context/MainProvider'
import DisplayMap from './DisplayMap'
    
    export default function Covid(props) {
    const {display} = useContext(MainContext)
   console.log(props)

    function DisplayList(props) {
        const {display} = props
        return (
            <div>
                {display.map(item => <DisplayMap {...item} key={display.date}/>)}
            </div>
        )
    }


    
    const {getdisplay} = useContext(MainContext)
    return (
        <div>
            <h1 className="title">Covid Data</h1>
            <DisplayList display={display}/>
            <button onClick={getdisplay}>Test</button>
        </div>
    )
}