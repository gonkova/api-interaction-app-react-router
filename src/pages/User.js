import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import WithLayout from '../layout/WithLayout';
import Planets from '../components/Planets';

function User() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [result, setResult] = useState(null);

    function handleSubmit() {
        const user = {
            completed: false,
            username: userName,
            email: email,
        }
        axios.post('https://jsonplaceholder.typicode.com/users', user)

            .then(response => {
                setUserName('');
                setEmail('');
                alert('Success!')
                setResult(response.data)
            })
    }

    function clickBtn() {
        return setResult(null);
    }

    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: 200,
        padding: 6,
        margin: '0 auto'
    }

    return (
        <div >
            <div style={divStyle}>
                <label>Username</label>
                <input
                    style={{ padding: '4px 8px' }}
                    type='text'
                    value={userName}
                    onInput={(e) => setUserName(e.target.value)}
                />
            </div>
            <div style={divStyle}>
                <label>Email</label>
                <input
                    style={{ padding: '4px 8px' }}
                    type='email'
                    value={email}
                    onInput={(e) => setEmail(e.target.value)}
                />
            </div>
            <div style={{ width: 189, margin: '0 auto' }}>
                <Button
                    title='Save'
                    padding='6px 77px'
                    onClick={handleSubmit}
                />
            </div>
            <div style={{ marginTop: 30 }}>
                {result &&
                    <div style={{ width: '100%', margin: '0 auto' }}>
                        Result:{JSON.stringify(result)}
                        <Button
                            title='X'
                            background='red'
                            padding='4px 6px'
                            onClick={clickBtn} 
                        />
                    </div>
                }
            </div>
            <Planets />
        </div>
    );
}
export default WithLayout(User);

