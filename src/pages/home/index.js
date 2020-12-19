import React, { useEffect } from 'react';
import { MainTask } from '../../components';

const Home = () => {
  useEffect(() => {
    document.title = 'Home  Aplikasi-SiOce';
  });
  return (
    <div>
      {/* <h1>Home</h1> */}
      <MainTask />
    </div>
  );
};

export default Home;
