import React from 'react';
import './Home.css'; 
import About from './About';

function Home() {
  return (
    <>
    <div className="home-container">
      <div className="content">
        <h1>HARDWARE</h1>
        <p>Premium finishing with high quality<br/> custom plated metal.</p>
      </div>
    </div>
    <About/>
    </>

  );
}

export default Home;
