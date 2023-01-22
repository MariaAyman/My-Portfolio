import React from 'react';

function ProjectCard({project}) {
    return (
        <div className="card text-center" style={{width: '18rem', margin: '0 10px 10px 0'}}>
            <img src={project.thumbnail} alt={project.name} />
            <div className="card-body info" style={{backgroundColor: '#1C1620'}}>
                <h5 className="card-title color-magenta">{project.name}</h5>
                <a href={project.liveDemo} className="m-3 btn danger" target="_blank" rel="noopener noreferrer">Live Demo</a>
                { project.code && (<a href={project.code} className="m-3 btn danger" target="_blank" rel="noopener noreferrer">Code</a> )}
            </div>
        </div>
    );
}

export default ProjectCard;