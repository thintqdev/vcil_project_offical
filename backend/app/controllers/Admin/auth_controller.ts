import Admin from '#models/admin'
import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'
import { errorResponse, successResponse } from '../../../helpers/helpers.js'

export default class AuthController {
  async login({ request, response }: HttpContext) {
    const { username, password } = request.only(['username', 'password'])

    const admin = await Admin.findBy('username', username)
    if (!admin) {
      return response.status(400).json(errorResponse('Username not found'))
    }

    const checkPassword = await hash.verify(admin.password, password)

    if (!checkPassword) {
      return response.status(400).json(errorResponse('Password is incorrect'))
    }

    const token = await Admin.accessTokens.create(admin)

    return response.status(200).json(successResponse('Login successful', token))
  }
}
