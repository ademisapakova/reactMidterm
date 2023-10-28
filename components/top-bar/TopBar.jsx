import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './TopBar.css'
const TopBar = () => {


    return (
        <div className="top-bar">
            <div className="primary-menu">
                <Link to="/home">Главная</Link>
            </div>

            <div className="icons">


                <Link to="/profile">
                    <FontAwesomeIcon icon={faUser} />
                </Link>
            </div>
        </div>
    );
};

export default TopBar;