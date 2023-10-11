import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
    const MENU_ITEMS = [
        { link: '/', title: 'Home' },
        { link: '/facts', title: 'Facts' },
        { link: '/user', title: 'Planets' },

    ]
    const [isShown, setIsShown] = useState(false);
    return (
        <div className='menu'>
            <nav >
                <button className='d-hide' onClick={() => {
                    setIsShown(!isShown);
                }}>
                    <i class='fa fa-bars'></i>< i />
                </button>
                <ul className={!isShown && 'm-hide'} >
                    {MENU_ITEMS.map((item, index) => (
                        <li key={index} className='menu-item'>
                            <Link to={item.link}>{item.title}</Link>
                        </li>
                    ))}
                    <li className='menu-item' id='menu-btn'>
                        <Link to='/LoginForm'>Sign In</Link>
                    </li>
                </ul>
            </nav>
        </div >
    );
}
