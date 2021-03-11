import './SingleTeam.css';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const SingleTeam = (props) => {
    const { idTeam, strTeamBadge, strSport, strTeam } = props.team;
    return (
        <div className="col-md-4 p-3 my-3">
            <Card>
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body>
                    <div className="text-center">
                        <Card.Title >{strTeam}</Card.Title>
                        <Card.Text >Sports Type: {strSport}</Card.Text>
                        <Button as={Link} variant="primary" to={`/team/${idTeam}`}>Explore<FontAwesomeIcon icon={faArrowRight} /></Button>
                    </div>
                </Card.Body>
            </Card>

        </div>
    );
};

export default SingleTeam;