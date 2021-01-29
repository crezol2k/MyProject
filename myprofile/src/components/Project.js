import React from 'react';
import ProjectItem from '../components/ProjectItem';
import project from '../img/project.jpg';

function Project() {
    return (
        <div>
            <ProjectItem
                src = {project}
                alt = 'project'
                projectName = 'Nguyen'
                projectType = 'Website'
            />
        </div>
    )
}

export default Project
