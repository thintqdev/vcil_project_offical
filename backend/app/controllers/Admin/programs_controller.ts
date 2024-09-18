import type { HttpContext } from '@adonisjs/core/http'
import { errorResponse, notFoundResponse, successResponse } from '../../../helpers/helpers.js'
import Program from '#models/program'
import { cuid } from '@adonisjs/core/helpers'
import drive from '@adonisjs/drive/services/main'

export default class ProgramsController {
  async index({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)

    const programs = await Program.query().paginate(page, limit)

    return response.status(200).json(successResponse('Programs fetched successfully', programs))
  }

  async store({ request, response }: HttpContext) {
    const image = request.file('image', {
      size: '10mb',
      extnames: ['jpg', 'png', 'jpeg'],
    })
    const data = request.only(['name', 'short_description', 'description', 'registration_link'])

    if (!image) {
      return response.status(400).json(errorResponse('Image is required'))
    }

    const key = `images/programs/${cuid()}.${image.extname}`
    await image.moveToDisk(key)
    data.image = await drive.use().getUrl(key)

    const program = await Program.create(data)

    return response.status(200).json(successResponse('Program created successfully', program))
  }

  async show({ params, response }: HttpContext) {
    const program = await Program.find(params.id)

    if (!program) {
      return response.status(404).json(notFoundResponse('Program not found'))
    }

    return response.status(200).json(successResponse('Program fetched successfully', program))
  }

  async update({ params, request, response }: HttpContext) {
    const program = await Program.find(params.id)

    if (!program) {
      return response.status(404).json(notFoundResponse('Program not found'))
    }

    const image = request.file('image', {
      size: '10mb',
      extnames: ['jpg', 'png', 'jpeg'],
    })
    const data = request.only(['name', 'short_description', 'description', 'registration_link'])

    if (image) {
      const key = `images/programs/${cuid()}.${image.extname}`
      await image.moveToDisk(key)
      data.image = await drive.use().getUrl(key)
    }

    program.merge(data)
    await program.save()

    return response.status(200).json(successResponse('Program updated successfully', program))
  }

  async destroy({ params, response }: HttpContext) {
    const program = await Program.find(params.id)

    if (!program) {
      return response.status(404).json(notFoundResponse('Program not found'))
    }

    await program.delete()

    return response.status(200).json(successResponse('Program deleted successfully'))
  }

  async getHomeUpcomingProgram({ response }: HttpContext) {
    const homeUpcomingProgram = await Program.query().orderBy('created_at', 'desc').limit(3)

    return response
      .status(200)
      .json(successResponse('Home upcoming program fetched successfully', homeUpcomingProgram))
  }
}
