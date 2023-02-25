import React from 'react';
import {} from '../../assets/vortex.JPG';

export const Home = () => {
    return (
        <div style={home} className="home">
            <h1>Welcome to Bolt Gun Nation</h1>
        </div>
    );
};

const home = {
    display: 'Flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    color: 'white',
};
