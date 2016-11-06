import React from 'react';
import Project from './Project';
import ProjectDetail from './ProjectDetail';
import projects from './projects.json';

const Projects = (props) => {
  const projectName = props.params.name;

  if (projectName) {
    return (
        <ProjectDetail />
    )
  } else {
    return (
        <ul>
          { projects.map((project, i) => <Project key={i} {...project} />) }
        </ul>
    )
  }
};

export default Projects;