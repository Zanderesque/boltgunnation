import React, { useState } from 'react';
import Background from 'src/assets/Background.jpeg';
//import Sidebar from '../Sidebar/index';

export default function Header() {}
  const [showBasic, setShowBasic] = useState(false);

  return 
   <div>
  <Header>
  <Header style={backgroundImage}`url(${Background})`}>>
    <Header.Item>
      <Header.Link href="src/components/Header/Header.js" fontSize={2}>
        <img src='src/assets/logo.png' size={32} sx={{mr: 2}} />
        <span>Bolt Gun Nation</span>
      </Header.Link>
    </Header.Item>
    <Header.Item full>Menu</Header.Item>
  </Header>
  </div>