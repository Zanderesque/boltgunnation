import React from 'react';

export const Home = () => {
    return (
        <div style={home}>
            <h1>Welcome to Bolt Gun Nation</h1>
        </div>
    );
};

const home = {
    display: 'Flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: 'green',
    alignItems: 'center',
};