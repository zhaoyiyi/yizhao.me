import React, { Component } from 'react';
import axios from 'axios';
import Project from './Project';
import ProjectDetail from './ProjectDetail';
import projects from './projects.json';

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    currentProject: '',
    projectDetail: '',
  };


  findProject(name) {
    // replace dash with space to match original project name
    return name && projects.find(p => p.name === name.replace('-', ' '));
  }

  fetchDetail(project) {
    const rawLink = project.github.replace('github.com', 'raw.githubusercontent.com');
    // axios.get(`${rawLink}/master/README.md`)
    console.log('=======fetching...');
    axios.get(`${rawLink}/master/README.md`)
        .then(response => this.setState({
          projectDetail: response.data,
          currentProject: project.name,
        }));
  };

  render() {
    const project = this.findProject(this.props.params.name);
    if (project) {
      // console.log('state', this.state.currentProject, project.name);
      // If showing a new project detail page, fetch data
      if (this.state.currentProject !== project.name) {
        this.fetchDetail(project);
        return <h1>loading...</h1>;
      }else {
        return <ProjectDetail markdown={this.state.projectDetail}/>;
      }
    }

    return (
        <ul>
          { projects.map((project, i) => <Project key={i} {...project} />) }
        </ul>
    )
  }
}

export default Projects;