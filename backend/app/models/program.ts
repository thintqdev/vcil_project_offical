import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@adonisjs/lucid/orm'
import slugify from 'slugify'

export default class Program extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare short_description: string

  @column()
  declare description: string

  @column()
  declare image: string

  @column()
  declare slug: string

  @column()
  declare registration_link?: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeSave()
  public static async createSlug(program: Program) {
    if (program.$dirty.name) {
      program.slug = slugify(program.name, { lower: true })
    }
  }
}
