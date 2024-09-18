import Admin from '#models/admin'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    await Admin.create({
      full_name: 'Admin',
      username: 'admin',
      password: 'admin',
      avatar: null,
    })
  }
}
