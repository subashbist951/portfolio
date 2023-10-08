import React from "react";
import { FaLinkedin } from 'react-icons/fa';
import anmiation1 from '../assets/image/second.gif'

function Profile() {
    return (
      <div className="profile">
        <div className="profile-data">
            <h1>SUBASH SINGH BIST</h1>
            <h2>Full Stack Developer</h2>
        </div>
        <div className="social-links">
           <a href="https://in.linkedin.com/in/subash-singh-bist-20ba88174">
           <FaLinkedin />
           </a> 
        </div>
      </div>
    );
  }
  
  export default Profile;
  