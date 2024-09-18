import type { HttpContext } from '@adonisjs/core/http'

import Tag from '#models/tag'
import { successResponse } from '../../../helpers/helpers.js'

export default class TagsController {
  async index({ request, response }: HttpContext) {
    const tags = await Tag.query().select('id', 'name')

    return response.status(200).json(successResponse('Tags fetched successfully', tags))
  }
}
