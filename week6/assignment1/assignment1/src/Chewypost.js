import React from 'react'

function Chewypost(props) {
    return(
        <div>
            <h1 className="name">{props.name}</h1>
            <ul className="postList">
    <li>Height: {props.height}</li>
    <li>Mass: {props.mass}</li>
    <li>Hair Color: {props.hair_color}</li>
    <li>Skin Color: {props.skin_color}</li>
    <li>Eye Color: {props.eye_color}</li>
    <li>Birth Year: {props.birth_year}</li>
    <li>Gender: {props.gender}</li>
                
            </ul>
        </div>
    )
}

export default Chewypost