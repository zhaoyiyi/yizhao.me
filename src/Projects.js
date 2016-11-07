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
    projectDetail: ''
  };

  componentWillUpdate(nextProps) {
    console.log(nextProps);
  }

  fetchDetail = async (githubLink) => {
    const readmeLink = githubLink.replace('github.com', 'raw.githubusercontent.com');
    const response = await axios.get(`${readmeLink}/master/README.md`);
    this.setState({projectDetail: response.data})
  };

  render() {
    const projectName = this.props.params.name;

    if (projectName) {
      // this.fetchDetail('https://github.com/zhaoyiyi/draw-something');
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