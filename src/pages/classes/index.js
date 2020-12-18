import React from 'react';
import { Tugas } from '../../components';
import './style.css';

const Classes = () => {
  return (
    <div className="mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col md-8 text-center">
            <h1>Postingan</h1>
          </div>
          <div className="col md-4">
            <Tugas />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
