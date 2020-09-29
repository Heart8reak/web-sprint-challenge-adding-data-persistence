exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('projects')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('projects').insert([
				{
					id: 1,
					project_name: 'Ract Native',
					description: 'Its a mobile app that generates $$$',
					completed: false
				},
				{
					id: 2,
					project_name: 'Django Project',
					description: 'Its a Python backend application',
					completed: false
				},
				{
					id: 3,
					project_name: 'Javascript Online Mastery',
					description: 'To become a 7 figure Javascript Master',
					completed: false
				}
			]);
		});
};
