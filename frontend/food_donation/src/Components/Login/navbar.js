import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "./navbar.css";
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, logout } from '../redux/UserSlice';

function He() {
  const user = useSelector(selectUser);
  const loggedIn = user.loggedIn;
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    toggleDrawer(false);
  };

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <NavLink exact to="/" className="nav-logo">
            <h3>COPR</h3>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact to="/allimage"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                COPRGRAM
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact to="/newfeed"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                FEEDBACK
              </NavLink>
            </li>
         
            {loggedIn ? (
              <>
              
                <li className="nav-item">
                  <NavLink
                    exact to="/"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleLogout}
                  >
                    LOGOUT
                  </NavLink>
                </li>
                
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    exact to="/login"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    LOGIN
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    exact to="/register"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    SIGNUP
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
        <FontAwesomeIcon icon={click ? faTimes : faBars} />
      </div>
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <div style={{ width: '250px', paddingLeft: '20px' }}>
          {/* Add a close ("x") icon */}
          <div
            style={{  cursor: 'pointer', paddingTop: '10px',paddingLeft:'200px' }}
            onClick={toggleDrawer(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>

          <List>
          <center>
                  Welcome {loggedIn ? user.user.username : 'Guest'}
                  <br />
                </center>

                <ListItem button onClick={toggleDrawer(false)}>
                  <Link to="/about" style={{ textDecoration: "none" }}>
                    <ListItemText primary=" About" />
                  </Link>
                </ListItem>
                <ListItem button onClick={toggleDrawer(false)}>
                  <Link to="/terms" style={{ textDecoration: "none" }}>
                    <ListItemText primary="Terms and Conditions" />
                  </Link>
                </ListItem>

                <ListItem button onClick={toggleDrawer(false)}>
                  <Link to="/faq" style={{ textDecoration: "none" }}>
                    <ListItemText primary="FAQ" />
                  </Link>
                </ListItem>
<ListItem button onClick={toggleDrawer(false)}>
                  <Link to="/privacy" style={{ textDecoration: "none" }}>
                    <ListItemText primary="Privacy Policy" />
                  </Link>
                </ListItem>
                <ListItem button onClick={toggleDrawer(false)}>
                  <Link to="/adminlogin" style={{ textDecoration: "none" }}>
                    <ListItemText primary="Admin" />
                  </Link>
                </ListItem>
                
                  
  
          </List>
        </div>
      </Drawer>
    </div>
      </nav>
    </>
  )
}

export default He;