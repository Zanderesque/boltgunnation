import React from 'react';
import {} from '../../assets/vortex.JPG';

export const Home = () => {
    return (
        <div style={home} className="home">
            <div className="home-image-container" style={imageContainer}>
                <h1>Welcome to Bolt Gun Nation</h1>
            </div>
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

const imageContainer = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
};
