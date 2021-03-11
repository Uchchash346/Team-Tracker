import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TeamDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPodcast, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'

import male from '../../Photo/male.png'
import female from '../../Photo/female.png'
import facebook from "../../Icon/Facebook.png";
import youtube from "../../Icon/YouTube.png";
import twitter from "../../Icon/Twitter.png";

const TeamDetails = () => {

    const { idTeam } = useParams();
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(data => setTeam(data.teams))
    }, [idTeam])
    return (
        <div>
            {
                team.map(team =>
                    <div className="main-container">
                        <div className="team-banner-image">
                            <img className="image-fluid cover-image w-100 h-50" src={team.strTeamBanner} alt="" height="200px"></img>
                        </div>
                        <div className="information-area mt-5 container ">
                            <div className="team-information ">
                                <p><FontAwesomeIcon icon={faPodcast} />Founded Year: {team.intFormedYear}</p>
                                <p><FontAwesomeIcon icon={faFlag} />Country: {team.strCountry}</p>
                                <p><FontAwesomeIcon icon={faFutbol} />Sport Type: {team.strSport}</p>
                                <p><FontAwesomeIcon icon={faMars} />Gender: {team.strGender}</p>
                            </div>

                          {/* Condition Rendering */}
                            <div className="team-image">
                                {team.strGender && (("Male" === team.strGender) ? <img src={male} alt="" height="200px" /> : <img src={female} alt="" height="200px" />)}
                            </div>
                        </div>
                        <div className="container description">
                            <p>{team.strDescriptionEN}</p>
                        </div>
                        <div className="container description">
                            <p>{team.strDescriptionEN}</p>
                        </div>
                        <div className="container social-media">
                            <a href={team.strFacebook}><image src={facebook}></image></a>
                            <a href={team.trFacebook}><image src={youtube}></image></a>
                            <a href={team.strFacebook}><image src={twitter}></image></a>
                        </div>
                    </div>

                )

            }
        </div>
    );
};

export default TeamDetails;