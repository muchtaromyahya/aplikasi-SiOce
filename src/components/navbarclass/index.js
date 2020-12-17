import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import ModalCreateClass from '../modal-createclass';
import './style.css';

const NavbarClass = () => {
  return (
    <div>
      <Navbar className="color-nav" variant="dark">
        <Navbar.Brand className="text-dark" href="/classroom">
          Kelas Saya
        </Navbar.Brand>
        <Nav className="ml-auto">
          <ModalCreateClass />
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavbarClass;
