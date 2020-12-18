import React from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'reactstrap';
import {
  isUserAuthenticated,
  deleteCookie,
  getCookie,
} from '../../utils/cookie';
import './style.css';

function getUserName() {
  if (getCookie('userData')) {
    // console.log(JSON.parse(getCookie('data')).name);
    const data = JSON.parse(getCookie('userData')).name;
    return data;
  }
  return '';
}
function getStatus() {
  if (getCookie('userData')) {
    // console.log(JSON.parse(getCookie('data')).status);
    const data = JSON.parse(getCookie('userData')).status;
    return data;
  }
  return '';
}

const Header = () => {
  const listMenu = ['Home', 'Classes'];
  const username = `${getUserName()}`;
  const status = `${getStatus()}`;
  const awal = ' - (';
  const akhir = ')';
  // console.log(username);
  const logout = () => {
    deleteCookie('token');
    deleteCookie('userData');
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
        <>
          <span className="margin-bottom">
            <h1 className="username">
              {username}
              {awal}
              {status}
              {akhir}
            </h1>
            {/* <h1 className="username">{ status }</h1> */}
          </span>
          <button
            type="button"
            className="logout btn btn-danger"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <div />
      )}
    </div>
  );
};
export default Header;
