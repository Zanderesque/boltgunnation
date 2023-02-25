import { Dropdown } from 'react-bootstrap';
import { BsList } from 'react-icons/bs';

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
            <h1 style={logo}>BGN LOGO</h1>
        </div>
    );
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
                <Dropdown.Item>Del Norte Gun Club</Dropdown.Item>
                <Dropdown.Item>Zia Rifle & Pistol Club</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

const mainNavbar = {
    backgroundColor: 'aquamarine',
    display: 'flex',
    height: 'fit-content',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px',
};

const logoContainer = {
    marginLeft: '10px',
};

const logo = {};
