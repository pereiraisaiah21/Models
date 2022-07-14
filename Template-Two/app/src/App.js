import React from "react";

//Components
import Home from "./Pages/Home/Home"
// Styles
import './App.css';
// Images
import Logo from "./logo.png";

function App() {
  return (
    <div className="App">
       <header id="header">
        <div className="header-wrap">
            <img id="logo" alt="" src={Logo} />
            <ul id="menu-list">
                <li className="menu-list-item">
                    <a>Home</a>
                </li>
                <li className="menu-list-item">
                    <a>Services</a>
                </li>
                <li className="menu-list-item">
                    <a>Blog</a>
                </li>
                <li className="menu-list-item">
                    <a>Contate-nos</a>
                </li>
            </ul>
        </div>
      </header>
      <main className="escope">
        <Home />
      </main>
    </div>
  );
}

export default App;
