import React from 'react';
import ProjectCard from './ProjectCard'

function ProjectsList({projects}) {
    return (
        <div className='container'>
            <div className="row fade-in">
                {projects.map((p,i) => <ProjectCard key={i} project={p} />)}
            </div>
        </div>
    );
}

export default ProjectsList;