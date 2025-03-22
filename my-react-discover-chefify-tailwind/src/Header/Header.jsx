import React from 'react';
import './style.css';

const Header = () => {
    return (
        //component
        <div className="h-[100px] w-auto border border-black flex justify-evenly">
            <div className="flex justify-between items-center">
                <img src="../src/3_Data/Lab02/Group 15.png" alt="Logo" />
                <input type="text" placeholder="cakescascsa" />
            </div>
            {/* .menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
} */}
            <div className="flex justify-between items-center">
                <ul className="list-none flex items-center">
                    <li className='p-2'>what to cook</li>
                    <li className='p-2'>Recipes</li>
                    <li className='p-2'>Ingredients</li>
                    <li className='p-2'>Occasions</li>
                    <li className='p-2'>About us</li>
                </ul>
            </div>
            <div className="ava-com">
                {/*  */}
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
