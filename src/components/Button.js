import React, { useState } from 'react';

export default function Button(props) {
    const [isHovered, setIsHovered] = useState(false);

    const btnStyles = {
        border: 'unset',
        padding: props.padding ?? '5px 30px',
        textTransform: 'uppercase',
        color: props.color ?? 'white',
        background: props.background ?? '#333',
        opacity: isHovered ? 0.3 : 1,
        cursor: 'pointer'
    }
    return (
        <>
            <button
                style={btnStyles}
                onClick={props.onClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {props.title}
            </button>
        </>
    );
}