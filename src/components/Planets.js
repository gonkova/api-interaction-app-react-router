import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from './Button';
import Table from './Table';

export default function Planets() {
    const [inputValue, setInputValue] = useState('');
    const [isShown, setIsShown] = useState(false);
    const [planets, setPlanets] = useState([]);
    const API_KEY = 'wOeyKdgQX0ceMO2942H6wA==Cw962fqzJVT5A2By';

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const clickBtn = () => {
        setInputValue('');
        setIsShown(false);
    }

    const fetch = () => {
        axios.get(`https://api.api-ninjas.com/v1/planets?name=${inputValue}`, {
            headers: {
                'X-Api-Key': API_KEY
            }
        })
            .then(response => {
                setPlanets(response.data.map(i => [i.name, i.mass, i.radius, i.period]));
                setIsShown(true);
            })
    }

    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100px',
        width: 200,
        padding: 6,
        margin: '0 auto'
    }

    return (
        <div>
            <div style={divStyle}>
                <div style={{ display: 'flex' }}>
                    <input
                        style={{ marginRight: 5, padding: '4px 8px' }}
                        type='text'
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder='Enter planet name...'
                    />
                    <Button
                        title='X'
                        background='red'
                        padding='4px 6px'
                        onClick={clickBtn}
                    />
                </div>
                <div>
                    <Button
                        title='send'
                        padding='6px 76px'
                        onClick={fetch}
                    />
                </div>
            </div>
            {isShown && <Table
                columns={['Name', 'Mass', 'Radius', 'Period']}
                values={planets}
            />}
        </div>
    );
}