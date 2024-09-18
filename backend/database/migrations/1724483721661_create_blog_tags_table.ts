import { BaseSchema } from '@adonisjs/lucid/schema'

export default class BlogTag extends BaseSchema {
  protected tableName = 'blog_tag'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('blog_id').unsigned().references('id').inTable('blogs').onDelete('CASCADE')
      table.integer('tag_id').unsigned().references('id').inTable('tags').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
