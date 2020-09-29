import React from 'react'

const Projects = props => {
    return (
        <div>
            <h2>Project Name: {props.project_name}</h2>
            <h4>Description: {props.description}</h4>
        </div>
    )
}

export default Projects