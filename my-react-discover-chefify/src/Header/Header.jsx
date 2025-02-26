import React from 'react';
import './style.css';

const Header = () => {
    return (
        <div className="component">
            <div className="logo-com">
                <img src="../src/3_Data/Lab02/Group 15.png" alt="Logo" />
                <input type="text" placeholder="cakescascsa" />
            </div>
            <div className="menu">
                <ul className="menu-list">
                    <li>what to cook</li>
                    <li>Recipes</li>
                    <li>Ingredients</li>
                    <li>Occasions</li>
                    <li>About us</li>
                </ul>
            </div>
            <div className="ava-com">
                <ul className="ava-list">
                    <li>
                        <img src="../src/3_Data/Lab02/Archive check.png" alt="Your Recipe Box" />
                        Your Recipe Box
                    </li>
                    <li>
                        <img src="../src/3_Data/Lab02/Avatar 35.png" alt="Avatar" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
