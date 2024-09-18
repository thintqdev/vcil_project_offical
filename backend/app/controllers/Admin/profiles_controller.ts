import type { HttpContext } from '@adonisjs/core/http'
import { errorResponse, successResponse } from '../../../helpers/helpers.js'

export default class ProfilesController {
  async me({ auth, response }: HttpContext) {
    const user = auth.user

    return response.status(200).json(successResponse('Profile fetched successfully', user))
  }
}
