import React from 'react'


export default function DisplayMap(props) {
    const {date, state, death, positive, recovered} = props
    return (
        <div className="display">
            <h1>Date: {date}</h1>
            <h1>State: {state}</h1>
            <h1>Number of Deaths: {death}</h1>
            <h1>Number of Positive Tests: {positive}</h1>
            <h1>Number of Recoverd: {recovered}</h1>
        </div>
    )
}



