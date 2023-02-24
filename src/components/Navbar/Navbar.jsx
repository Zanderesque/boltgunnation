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
  return <div>end</div>;
};

const mainNavbar = {
  backgroundColor: "aquamarine",
  display: "flex",
  height: "fit-content",
  justifyContent: "space-between",
};

const logoContainer = {
  marginLeft: "10px",
};

const logo = {};
