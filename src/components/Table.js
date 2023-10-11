import React from 'react';
import './Table.css';

export default function Table({ columns = [], values = [], }) {

    function renderTrItem(item) {
        return item.map((i, index) => <td data-label={columns[index]} key={index}>{i}</td>)
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        {columns.map((c, index) => <th key={index}>{c}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {values.map((v, index) => <tr key={index}>{renderTrItem(v)}</tr>)}
                </tbody>
            </table>
        </>
    );
}