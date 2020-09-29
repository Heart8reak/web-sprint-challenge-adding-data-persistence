import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Projects from './Projects';

const ProjectList = (props) => {
	const [ projectList, setProjectList ] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:4000/api/projects`)
			.then((res) => {
				console.log(res);
				setProjectList(res.data.projectList);
				console.log(setProjectList);
			})
			.catch((err) => {
				console.log('ERROR', err);
			});
	}, []);

	return (
		<div>
			{projectList.map((data) => {
				return <Projects key={data.id} project_name={data.project_name} description={data.description} />;
			})}
		</div>
	);
};

export default ProjectList;
