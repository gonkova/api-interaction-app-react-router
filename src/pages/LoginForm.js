import React, { useState } from 'react';
import WithLayout from '../layout/WithLayout';
import Button from '../components/Button';
import './LoginForm.css';

function LoginForm() {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [isLogged, setIsLogged] = useState(false);

    function handleInput(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function login() {
        if (formData.username == 'ivan' && formData.password == '123') {
            setIsLogged(true);
        }
    }

    return (
        <div>
            {!isLogged &&
                <div className='container-log'>
                    <div className='container-log-item'>
                        <label>Username *</label>
                        <input
                            type='text'
                            name='username'
                            onInput={handleInput}
                        />
                    </div>
                    <div className='container-log-item'>
                        <label >Password *</label>
                        <input
                            type='password'
                            name='password'
                            onInput={handleInput}
                        />
                    </div>
                    <div >
                        < Button
                            title='Login'
                            background='rgb(126, 89, 200)'
                            padding='6px 73px'
                            onClick={login}
                        />
                    </div>
                </div>
            }
            {isLogged && <div style={{ marginLeft: '30px', fontWeight: 'bold' }}>Hello, Ivan!</div>}
        </div>
    );
}
export default WithLayout(LoginForm);