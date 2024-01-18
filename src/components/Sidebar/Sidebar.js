import React from 'react';
import {
  M
} from 'mdb-react-ui-kit';

const Sidebar = () => {
  return (
    <NavList>
    <NavList.Item href="/branches">Branches</NavList.Item>
    <NavList.Item href="/tags">Tags</NavList.Item>
    <NavList.Item>
      First Time Shooter
      <NavList.SubNav>
        <NavList.Item href="src/components/Pages/First Time Shooters/index.js" aria-current="page">
          Your First Match
        </NavList.Item>
        <NavList.Item href="src/components/Pages/Gear List/index.js">PRS Gear</NavList.Item>
      </NavList.SubNav>
    </NavList.Item>
  </NavList>
  );
};

export default Sidebar;