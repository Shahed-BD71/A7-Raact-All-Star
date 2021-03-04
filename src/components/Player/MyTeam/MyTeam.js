import React from 'react';
import './MyTeam.css';

const MyTeam = (props) => {
    const teamPlayer = props.value
    console.log(teamPlayer.name)
    return (
        <div className="container">
        <li><i>{teamPlayer.name}</i></li>
        </div>
    );
};

export default MyTeam;