import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Home  Aplikasi-SiOce';
  });
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
