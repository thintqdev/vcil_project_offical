import Network from '#models/network'
import { cuid } from '@adonisjs/core/helpers'
import type { HttpContext } from '@adonisjs/core/http'
import drive from '@adonisjs/drive/services/main'
import { successResponse } from '../../../helpers/helpers.js'

export default class NetworksController {
  async index({ response }: HttpContext) {
    const networks = await Network.all()

    return response.json(successResponse('Networks fetched successfully', networks))
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['name', 'link'])

    if (request.file('logo')) {
      const logo = request.file('logo', {
        size: '10mb',
        extnames: ['jpg', 'png', 'jpeg'],
      })

      const key = `images/networks/${cuid()}.${logo.extname}`
      await logo.moveToDisk(key)
      data.logo = await drive.use().getUrl(key)

      await Network.create(data)

      return response.json(successResponse('Network created successfully', data))
    }
  }

  async show({ request, response }: HttpContext) {
    const network = await Network.find(request.param('id'))

    if (!network) {
      return response.status(404).json({
        message: 'Network not found',
      })
    }

    return response.json(successResponse('Network fetched successfully', network))
  }

  async update({ request, response }: HttpContext) {
    const data = request.only(['name', 'link'])

    const network = await Network.find(request.param('id'))

    if (!network) {
      return response.status(404).json({
        message: 'Network not found',
      })
    }

    if (request.file('logo')) {
      const logo = request.file('logo', {
        size: '10mb',
        extnames: ['jpg', 'png', 'jpeg'],
      })

      const key = `images/networks/${cuid()}.${logo.extname}`
      await logo.moveToDisk(key)
      data.logo = await drive.use().getUrl(key)
    }

    network.merge(data)
    await network.save()

    return response.json(successResponse('Network updated successfully', network))
  }

  async destroy({ request, response }: HttpContext) {
    const network = await Network.find(request.param('id'))

    if (!network) {
      return response.status(404).json({
        message: 'Network not found',
      })
    }

    await network.delete()

    return response.json(successResponse('Network deleted successfully'))
  }
}
