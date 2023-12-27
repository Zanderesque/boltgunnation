import './index.css';
import { Navbar } from './components/Navigation';
import { ContentContainer } from './components/Structure';
import { Provider } from 'react-redux';
import Footer from './components/Footer/Footer';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    return (
        <Provider store={store}>
            <Navbar />
            <ContentContainer />
            {/* <Footer/> */}
        </Provider>
    );
}

export default App;
