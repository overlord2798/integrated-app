import React, { useState } from 'react';

const CreateProject = ({ onProjectCreate }) => {
  const [projectName, setProjectName] = useState('');

  const handleInputChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleCreateProject = () => {
    onProjectCreate(projectName);
    setProjectName('');
  };

  return (
    <div>
      <h2>Create a New Project</h2>
      <label>Name: </label>
      <input
        type="text"
        placeholder="Project Name"
        value={projectName}
        onChange={handleInputChange}
      />
      <br></br>
      <br></br>
      <label>Description: </label>
      <input
      type="text"
      placeholder="Project Description"
      />
      <br></br>
      <br></br>
      <label>Project ID: </label>
      <input
      type = "text"
      placeholder = "Project ID"
      />
      <br></br>
      <br></br>
      <br></br>
      <button onClick={handleCreateProject}>Create Project</button>
    </div>
  );
};

export default CreateProject;