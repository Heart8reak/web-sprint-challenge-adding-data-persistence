exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('tasks')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('tasks').insert([
				{ id: 1, description: 'learn how to generate an Android app', completed: false, project_id: 1 },
				{ id: 2, description: 'Next step is to generate an iOS app', completed: false, project_id: 1 },
				{
					id: 3,
					description: 'learn how to generate a models form with Django',
					completed: false,
					project_id: 2
				},
				{
					id: 4,
					description: 'learn how to clients who are looking to pay 7 figures to Javascript Engineers',
					completed: false,
					project_id: 3
				}
			]);
		});
};
