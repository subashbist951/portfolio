import React from "react";
import projectData from './projectData.json';

function Project() {
    return (
      <div className="projects">
           <div className="description">
                <p>
                "Welcome to my portfolio! I am a dedicated and versatile full-stack developer with three years of experience in creating web applications. My expertise spans a range of technologies, including React.js, Node.js, Laravel, jQuery, HTML, CSS, TypeScript, and Redux. I am passionate about building dynamic and user-friendly web solutions that solve real-world problems. Here, you'll find a selection of projects that highlight my skills and experience. Feel free to explore and get in touch if you'd like to discuss potential collaborations"
                </p>
           </div>
           <h2>MY PROJECTS LIST</h2>
           <ul className="project-list">
                {/* {projectData.map((project)=>{
                    <li className="project-item">
                        <a className="project-title">{project.name}</a>
                        <p className="project-description">{project.description}</p>
                        <p className="project-tech">Technologies: {project.technologies.join(', ')}</p>
                    </li>
                })} */}

                <li className="project-item">
                    <a className="project-title">Code3 Portal</a>
                    <p className="project-description">A portal having features of scheduler, manage customers, email notifications etc...</p>
                    <p className="project-tech">Technologies: React.js, Node.js, Redux,</p>
                </li>
                <li className="project-item">
                    <a className="project-title">TaskMaster - Your Personal Task Manager</a>
                    <p className="project-description">A task management application built with React.js and Node.js.</p>
                    <p className="project-tech">Technologies: React.js, Node.js, Redux,</p>
                </li>
                <li className="project-item">
                    <a className="project-title">Blogify - Content Management Made Easy</a>
                    <p className="project-description">A content management system (CMS) developed with Laravel and React.js.</p>
                    <p className="project-tech">Technologies: React.js, Node.js, Redux,</p>
                </li>
                <li className="project-item">
                    <a className="project-title">Sales Acceleator</a>
                    <p className="project-description">A Shopify App used for increase sales by encourging customers to buy extra products</p>
                    <p className="project-tech">Technologies: Shopify, React.js, Node.js, Redux,</p>
                </li>
           </ul>
      </div>
    );
  }
  
  export default Project;