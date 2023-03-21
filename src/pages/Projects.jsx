// Style
import "../styles/projects.scss";

// React
import React from "react";
import store from "../store/Context";

// Eigene Komponente
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const { projects } = store().data;

  return (
    <div className="notepad" style={{ background: projects.bg }}>
      <h2> {projects.title} </h2>
      <p> {projects.info} </p>
      <div className="gallery">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> 
        <ProjectCard />
        <ProjectCard />
        
      </div>
    </div>
  );
}

export default Projects;
