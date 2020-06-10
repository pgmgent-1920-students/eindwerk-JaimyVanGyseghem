import React, { } from 'react';
import { Link, NavLink  } from 'react-router-dom';
import logo from '../../static/images/logo.png';
import line_up from '../../static/images/line-up.jpg';
import info from '../../static/images/info.jpg';
import camping from '../../static/images/camping.jpg';
import tickets from '../../static/images/tickets.jpg';
import * as Routes from '../../routes';

import './Header.scss';

const Header = ({children}) => {

  const handleToggle = (ev) => {
    document.body.classList.toggle(`is-navigation-open`);
  };

  return (
    <header className="app-header ">
      <nav className="navbar navbar-light navigation">
        <h1 className="centerLogo">
          <Link to={Routes.LANDING}><img onClick={{style: document.body.style.backgroundImage = '../static/images/homebackground.jpg'}} className="logo" src={logo}></img></Link>
        </h1>
        <button onClick={ev => handleToggle(ev)} className="hamburger" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <div></div>
          <div></div>
          <div></div>
        </button>
        <div className="navbarContent collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbarDesign">
          <ul className="allItems">
            <li className="navCat leftSide">
              <NavLink to={Routes.HOME} className="nav-link" activeClassName="active">
              <p>Line up</p>
              <img className="animate__animated animate__bounce" src={line_up}></img>
              </NavLink>
            
            </li> 
            <li className="navCat rightSide">
              <NavLink to={Routes.INFO} className="nav-link" activeClassName="active">
              <p>Info</p>
              <img src={info}></img>
              </NavLink>
            </li> 
            <li className="navCat leftSide">
              <NavLink to={Routes.CAMPING} className="nav-link" activeClassName="active">
              <p>Camping</p>
              <img src={camping}></img>
              </NavLink>
            </li>          
            <li className="navCat rightSide">
              <NavLink to={Routes.TICKETS} className="nav-link" activeClassName="active">
              <p>Tickets</p>
              <img src={tickets}></img>
              </NavLink>
            </li> 
          </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
