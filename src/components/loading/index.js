import React from 'react';
import './style.css';

const Loading = () => {
  return (
    <div className="text-center">
      <button className="btn loading" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </button>
    </div>
  );
};
export default Loading;
