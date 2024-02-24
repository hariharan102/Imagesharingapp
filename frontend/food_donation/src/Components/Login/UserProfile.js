import React, { useState } from 'react';
import SettingsMenu from './SettingsMenu'; 

function UserProfile() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <div style={{ textAlign: 'right', padding: '10px' }}>
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios-glyphs/30/user-male-circle.png"
          alt="user-male-circle"
          onClick={toggleMenu}
        />
        {menuVisible && <SettingsMenu />}
      </div>
   
    </div>
  );
}

export default UserProfile;
