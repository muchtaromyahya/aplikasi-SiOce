import React from 'react';
import { ClassList, NavbarClass } from '../../components';
import './index.css';

const ClassRoom = () => {
  return (
    <div className="container">
      <NavbarClass />
      <ClassList />
    </div>
  );
};

export default ClassRoom;
