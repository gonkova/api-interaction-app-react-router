import React from 'react';
import Menu from '../components/Menu';

export default function WithLayout(Components) {

    function layout(props) {
        return (
            <>
                <div>
                    <Menu />
                </div>
                <div>
                    <Components {...props} />
                </div>
            </>
        );
    }
    return layout;
}