import React, { useState } from "react";
import Profile from "./Profile";
import Projects from  "./Projects";

function Home() {
    const [backgroundStyle, setBackgroundStyle] = useState('radial-gradient(600px at 897px 303px, rgba(29, 78, 216, 0.15), transparent 80%)');
    const handleMouseMove = (event) => {
        const x = event.clientX;
        const y = event.clientY;
        const gradient = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;

        setBackgroundStyle(gradient);
    };
    const handleMouseLeave = () => {
        // Reset the background when the mouse leaves the container
        setBackgroundStyle('');
    };
    return (
      <div 
        className="home"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ background: backgroundStyle, width: '100%', height: '100vh' }}
      >
        <div className="left-side">
            <Profile />
        </div>
        <div className="right-side"> 
            <Projects />
        </div>
      </div>
    );
  }
  
  export default Home;
  