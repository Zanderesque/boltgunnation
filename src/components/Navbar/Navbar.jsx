import { Dropdown } from 'react-bootstrap';
import { BsList } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import logo from '../../assets/logo.png';
import { uiControlActions } from '../../store/ui-control-slice';

export const Navbar = () => {
    return (
        <div style={mainNavbar}>
            <NavbarStart />
            <NavbarCenter />
            <NavbarEnd />
        </div>
    );
};

const NavbarStart = () => {
    return (
        <div style={logoContainer}>
            <img src={logo} style={logoStyle} alt="site logo"></img>
        </div>
    );
};

const logoStyle = {
    height: '60px',
    width: '60px',
};

const NavbarCenter = () => {
    return <div></div>;
};

const NavbarEnd = () => {
    const dispatch = useDispatch();

    const setNewPage = (newPage) => {
        dispatch(uiControlActions.setCurrentPage(newPage));
    };

    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" className="dropdown-button">
                <BsList />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => setNewPage(1)}>Home</Dropdown.Item>
                <Dropdown.Item onClick={() => setNewPage(2)}>Range Safety Rules</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

const mainNavbar = {
    backgroundColor: '#fff',
    display: 'flex',
    height: 'fit-content',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px',
    boxShadow: '1px 2px 3px rgba(0,0,0,.5)',
};

const logoContainer = {
    marginLeft: '10px',
};
