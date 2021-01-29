import React from 'react';


function ProjectItem(props) {
    return (
        <div className="grid-item">
            <img src={props.src} alt={props.alt} className='project-image'/>
            <div className="project-item-info">
                <h5 className="project-name"> {props.projectName}</h5>
                <span className="project-type">{props.projectType}</span>
            </div>
        </div>
    )
}

export default ProjectItem
