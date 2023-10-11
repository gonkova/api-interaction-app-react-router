import React from 'react';
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Facts from '../pages/Facts';
import LoginForm from '../pages/LoginForm';
import User from '../pages/User';


export default function App() {

    return (
        <div>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/facts' element={<Facts />} />
                <Route path='/user' element={<User />} />
                <Route path='/LoginForm' element={<LoginForm />} />
            </Routes>
        </div>
    );
}

