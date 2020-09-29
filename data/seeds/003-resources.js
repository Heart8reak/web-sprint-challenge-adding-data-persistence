exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('resources')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('resources').insert([
				{ id: 1, resource_name: 'Apple MacBook Pro', description: 'A personal laptop to do projects on' },
				{
					id: 2,
					resource_name: 'Wide Screen LED Screen',
					description: 'An second monitor to display code and work'
				},
				{ id: 3, resource_name: 'A Bose headphone', description: 'a pair of headphones to do work' }
			]);
		});
};
