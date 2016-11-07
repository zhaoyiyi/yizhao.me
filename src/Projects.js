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
    projectDetail: ''
  };


  fetchDetail(projectName) {
    console.log('gh link', projectName);
    // TODO: figure out a way to get project details from projects obj.
    if (this.state.currentProject !== projectName) {
      // const rawLink = githubLink.replace('github.com', 'raw.githubusercontent.com');
      // axios.get(`${rawLink}/master/README.md`)
      axios.get(`https://raw.githubusercontent.com/zhaoyiyi/draw-something/master/README.md`)
          .then(response => this.setState({
            projectDetail: response.data,
            currentProject: projectName
          }));
    }
  };

  render() {
    const projectName = this.props.params.name;

    if (projectName) {
      // If showing a new project detail page, fetch data and set state
      if (this.state.currentProject !== projectName) this.fetchDetail(projectName);
      return <ProjectDetail markdown={this.state.projectDetail}/>;
    } else {
      return (
          <ul>
            { projects.map((project, i) => <Project key={i} {...project} />) }
          </ul>
      )
    }
  }
}

export default Projects;