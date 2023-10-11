import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WithLayout from '../layout/WithLayout';

function Facts() {
    const [facts, setFacts] = useState([]);
    const API_KEY = 'wOeyKdgQX0ceMO2942H6wA==Cw962fqzJVT5A2By';
    const FACTS_LIMIT = 10;

    useEffect(() => {
        const fetch = () => {
            axios.get(`https://api.api-ninjas.com/v1/facts?limit=${FACTS_LIMIT}`, {
                headers: {
                    'X-Api-Key': API_KEY
                }
            })
                .then(response => {
                    setFacts(response.data);
                });
        }
        fetch();
    }, []);

    return (
        <div>
            <ul>
                {facts.map((f, index) => <li key={index}>{f.fact}</li>)}
            </ul>
        </div>

    );
}
export default WithLayout(Facts);