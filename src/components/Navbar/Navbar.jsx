import { Dropdown } from 'react-bootstrap';

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
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

const mainNavbar = {
    backgroundColor: 'aquamarine',
    display: 'flex',
    height: 'fit-content',
    justifyContent: 'space-between',
};

const logoContainer = {
    marginLeft: '10px',
};

const logo = {};
