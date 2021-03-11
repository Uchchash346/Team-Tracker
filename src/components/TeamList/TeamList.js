import React, { useEffect, useState } from 'react';
import SingleTeam from '../SingleTeam/SingleTeam';

const TeamList = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
            .then(res => res.json())
            .then(data => setTeam(data.teams.slice(0, 9)))
    }, [])
    return (
        <div className="container mt-5">
            <div className="row ">
                {
                    team.map(team => <SingleTeam team={team} ></SingleTeam>)
                }
            </div>
        </div>
    );
};
export default TeamList;