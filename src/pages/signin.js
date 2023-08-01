import React, { useState } from 'react';
//import './App.css';
import CreateProject from './CreateProject';
import JoinProject from './JoinProject';

const Project = () => {
  const [currentView, setCurrentView] = useState('create'); // 'create' or 'join'

  const handleProjectCreate = (projectName) => {
    // Implement your project creation logic here
    alert(`Project "${projectName}" created!`);
  };

  const handleProjectJoin = (projectCode) => {
    // Implement your project join logic here
    alert(`Joining project with code "${projectCode}"`);
  };

  return (
    
    <div className="app-container">
      <h1>NMass Hardware Solutions</h1>
      <div className="content-container">
      
          <div className="navigation">
          <button onClick={() => setCurrentView('create')}>Create New Project</button>
          <button onClick={() => setCurrentView('join')}>Join Existing Project</button>
        </div>
        {currentView === 'create' ? (
          <CreateProject onProjectCreate={handleProjectCreate} />
        ) : (
          <JoinProject onProjectJoin={handleProjectJoin} />
        )}
      </div>
      </div>
    
  );
};

export default Project;