import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column, manyToMany } from '@adonisjs/lucid/orm'
import Blog from './blog.js'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import slugify from 'slugify'

export default class Tag extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare slug: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Blog, {
    pivotTable: 'blog_tag',
  })
  declare blogs: ManyToMany<typeof Blog>

  @beforeSave()
  public static async createSlug(tag: Tag) {
    tag.slug = tag.name
  }
}
