import { Dropdown } from 'react-bootstrap';
import { BsList } from 'react-icons/bs';
import logo from '../../assets/logo.png';

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
    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" className="dropdown-button">
                <BsList />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item>Home</Dropdown.Item>
                <Dropdown.Item>Bolt Gun Race</Dropdown.Item>
                <Dropdown.Item>Range Safety Rules</Dropdown.Item>
                {/* <Dropdown.Item>Del Norte Gun Club</Dropdown.Item>
                <Dropdown.Item>Zia Rifle & Pistol Club</Dropdown.Item> */}
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
    borderBottom: '	#7d7d7d 1px solid',
};

const logoContainer = {
    marginLeft: '10px',
};
