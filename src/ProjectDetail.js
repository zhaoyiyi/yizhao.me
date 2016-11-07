import React from 'react';
import ReactMarkdown from 'react-markdown';

const ProjectDetail = ({markdown}) => {
  return (
      <ReactMarkdown source={markdown} />
  )
};

export default ProjectDetail;