import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  
  const projectCards = projects.map((project) => {
    return (
      <div key={project.id}>
        <ProjectItem name={project.name} about={project.about} technologies={project.technologies} />
      </div>
    )
  }) 
  

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectCards}</div>
    </div>
  );
}

export default ProjectList;
