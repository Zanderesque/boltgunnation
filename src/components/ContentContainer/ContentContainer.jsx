import { Home } from '../Home';
import { useSelector } from 'react-redux';
import { Rules } from '../Rules';

export const ContentContainer = () => {
    const currentPage = useSelector((state) => state.uiControl.currentPage);

    console.log(currentPage);

    return <div style={contentContainerSyle}>{getPageContent(currentPage)}</div>;
};

const getPageContent = (page) => {
    if (page === HOME) {
        return <Home />;
    } else if (page === RULES) {
        return <Rules />;
    }
};

const contentContainerSyle = {
    height: '100%',
};

const HOME = 1;
const RULES = 2;
