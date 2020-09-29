exports.up = function(knex) {
	return knex.schema
		.createTable('projects', tbl => {
			tbl.increments();
			tbl.string('project_name', 128).notNullable();
			tbl.string('description', 528);
			tbl
				.boolean('completed')
				.notNullable()
				.default(false);
		})
		.createTable('tasks', tbl => {
			tbl.increments();
			tbl.string('description', 128).notNullable();
			tbl
				.boolean('completed')
				.notNullable()
				.default(false);
			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('projects.id')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})
		.createTable('resources', tbl => {
			tbl.increments();
			tbl.string('resource_name', 128).notNullable();
			tbl.string('description', 528);
		})
		.createTable('project_resources', tbl => {
			tbl.increments();
			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('projects.id')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl
				.integer('resource_id')
				.unsigned()
				.notNullable()
				.references('resources.id')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExist('project-resources')
		.dropTableIfExist('resources')
		.dropTableIfExist('tasks')
		.dropTableIfExist('projects');
};
