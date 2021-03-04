import React from 'react';
import MyTeam from '../components/Player/MyTeam/MyTeam';

const Team = (props) => {
    console.log(props)
    const team = props.team;
   const totalAmount = team.reduce((sum, player) => sum + player.salary,0)
    return (
        <div>
            <h4>Team Player: {team.length}</h4>
            {
                team.map(value => <MyTeam value={value}></MyTeam>)
            }
            <p>Total Budget: <strong>${totalAmount}</strong></p>
            
        </div>
    );
};

export default Team;