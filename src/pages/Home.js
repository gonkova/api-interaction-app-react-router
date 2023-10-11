import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WithLayout from '../layout/WithLayout';
import Table from '../components/Table';

function Home() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const TEXT_SEARCH = 'italian wedding soup';
    const API_KEY = 'wOeyKdgQX0ceMO2942H6wA==Cw962fqzJVT5A2By';

    useEffect(() => {
        const fetch = () => {
            axios.get(`https://api.api-ninjas.com/v1/recipe?query=${TEXT_SEARCH}`, {
                headers: {
                    'X-Api-Key': API_KEY
                }
            })
                .then(response => {
                    setRecipes(response.data.map(i => [i.title, i.ingredients, i.servings, i.instructions]));
                })

        }
        fetch();
    }, []);

    return (
        <div>
            <div>
                <Table
                    columns={['Title', 'Ingredients', 'Servings', 'Instructions']}
                    values={recipes}
                />
            </div>
            {error && <p>{error}</p>}
        </div>
    );
}
export default WithLayout(Home);