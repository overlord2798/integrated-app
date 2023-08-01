import React, { useState } from 'react';

const JoinProject = ({ onProjectJoin }) => {
  const [projectCode, setProjectCode] = useState('');

  const handleInputChange = (e) => {
    setProjectCode(e.target.value);
  };

  const handleJoinProject = () => {
    onProjectJoin(projectCode);
    setProjectCode('');
  };

  return (
    <div>
      <h2>Join an Existing Project</h2>
      <label>Project ID: </label>
      <input
        type="text"
        placeholder="Project ID"
        value={projectCode}
        onChange={handleInputChange}
      />
      <br></br>
      <br></br>
      <button onClick={handleJoinProject}>Join Project</button>
    </div>
  );
};

export default JoinProject;