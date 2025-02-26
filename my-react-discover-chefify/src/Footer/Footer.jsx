import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="foot-left">
                <div className="about-us">
                    <div><h3>About Us</h3></div>
                    <div><p>Welcome to our website, a wonderful place to</p></div>
                    <div><p>explore and learn how to cook like a pro</p></div>
                    <div>
                        <input type="text" placeholder="Enter your email" />
                        <button>Send</button>
                    </div>
                </div>
                <div className="chefify">
                    <img src="../src/3_Data/Lab02/Group 16.png" alt="Chefify Logo" />
                    <h4>2023 Chefify Company</h4>
                    <h4>Team of Service</h4>
                </div>
            </div>
            <div className="foot-center">
                <div className="learn-more">
                    <h3>Learn more</h3>
                    <ul className="learn-more-list">
                        <li>Our Cook</li>
                        <li>See Our Features</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="shop">
                    <h3>Shop</h3>
                    <ul className="shop-list">
                        <li>Gift Sub</li>
                        <li>Send Us</li>
                    </ul>
                </div>
            </div>
            <div className="foot-right">
                <h3>Recipes</h3>
                <ul className="recipes-list">
                    <li>What to Cook</li>
                    <li>Pasta</li>
                    <li>Dinner</li>
                    <li>Healthy</li>
                    <li>Vegetarian</li>
                    <li>Vegan</li>
                    <li>Christmas</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
