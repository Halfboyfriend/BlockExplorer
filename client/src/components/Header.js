import React from "react";

function Header() {
  return (
    <div>
      <nav>
        <h2 className="brand__name">0x3Devoid Explorer</h2>

        <div id="nav__lists">
            <ul id="nav__items">
                <li id="nav__item">Home</li>
                <li id="nav__item">BlockChain</li>
                <li id="nav__item">Supports</li>
                <li id="nav__item">Contact</li>
            </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
