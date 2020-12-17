import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { isUserAuthenticated, deleteCookie } from '../../utils/cookie';
import './style.css';

const Header = () => {
  const listMenu = ['Home', 'Classes'];
  const logout = () => {
    deleteCookie('tokenn');
    window.location.replace('/login');
  };

  return (
    <div className="header sticky-top">
      <ul className="menu sticky">
        {listMenu.map((name) => {
          return (
            <Link to={`/${name.toLowerCase()}`} key={name}>
              <li className="menu-list">{name}</li>
            </Link>
          );
        })}
      </ul>
      {isUserAuthenticated() ? (
        <Button
          type="button"
          className="logout btn btn-danger"
          onClick={() => {
            logout();
          }}
        >
          Logout
        </Button>
      ) : (
        <div />
      )}
    </div>
  );
};
export default Header;
