import { Home } from '../Home';

export const ContentContainer = () => {
    return (
        <div style={contentContainerSyle}>
            <Home />
        </div>
    );
};

const contentContainerSyle = {
    height: '100%',
};
