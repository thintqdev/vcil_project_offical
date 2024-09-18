import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import Admin from './admin.js'
import type { BelongsTo, Has, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Tag from './tag.js'

export default class Blog extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare short_description: string

  @column()
  declare description: string

  @column()
  declare image: string

  @column()
  declare admin_id: number

  @column()
  declare category_id: number

  @column()
  declare status: number

  @column()
  declare is_featured: number

  @column()
  declare views: number

  @column()
  declare published_at: string

  @belongsTo(() => Admin)
  declare admin: BelongsTo<typeof Admin>

  @manyToMany(() => Tag, {
    pivotTable: 'blog_tag',
  })
  declare tags: ManyToMany<typeof Tag>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
