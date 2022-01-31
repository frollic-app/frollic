import React from 'react';

const Navbar = () => {
    return (
    <div id="nav">
      <img id="logo" alt="frollic-logo" src="/assets/logo.png"></img>
      <div id="profile-container">
          <button id="profile-icon">
              <img src="https://img.icons8.com/small/32/000000/gender-neutral-user.png"/>
          </button>
      </div>
    </div>
    )
}
export default Navbar;