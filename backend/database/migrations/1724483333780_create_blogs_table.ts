import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'blogs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table.text('short_description').notNullable()
      table.text('description').notNullable()
      table.string('image').notNullable()
      table.integer('admin_id').unsigned().references('id').inTable('admins')
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.integer('status').notNullable().defaultTo(1)
      table.integer('is_featured').notNullable().defaultTo(0)
      table.integer('views').notNullable().defaultTo(0)
      table.dateTime('published_at').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
