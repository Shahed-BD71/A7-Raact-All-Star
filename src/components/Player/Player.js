import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'


const Player = (props) => {
    const {name, position, salary, country, id, image} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="container p-2 m-5 w-50">
            <img className="w-50 mt-5" src={image}></img>
            <h3>{name}</h3>
            <strong>Salary: ${salary}</strong>
            <p><small>Position: {position}</small></p>
            <p>Country: {country}</p>
            <button onClick={() =>handleAddPlayer(props.player)} className="btn btn-primary">
            <FontAwesomeIcon icon={faPlusCircle}/>Add This Player</button>
        </div>
    );
};

export default Player;