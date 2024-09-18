import WhatWeDo from '#models/what_we_do'
import type { HttpContext } from '@adonisjs/core/http'
import { errorResponse, successResponse } from '../../../helpers/helpers.js'
import { cuid } from '@adonisjs/core/helpers'
import drive from '@adonisjs/drive/services/main'

export default class WhatWeDosController {
  async index({ response }: HttpContext) {
    const whatWeDos = await WhatWeDo.all()

    return response.json(successResponse('What we dos fetched successfully', whatWeDos))
  }

  async store({ request, response }: HttpContext) {
    const items = request.input('items')

    if (!Array.isArray(items) || items.length === 0) {
      return response.status(400).json(errorResponse('Invalid input data'))
    }

    const createdWhatWeDos = []

    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      const image = request.file(`items.${i}.image`)
      const data = {
        title: item.title,
        description: item.description,
      }

      if (!image) {
        return response.status(400).json(errorResponse(`Image is required for item ${i}`))
      }

      // Check if the item already exists in the database
      const existingItem = await WhatWeDo.query()
        .where('title', item.title)
        .andWhere('description', item.description)
        .first()

      // If it exists, delete the existing item
      if (existingItem) {
        await existingItem.delete()
      }

      const key = `images/what_we_do/${cuid()}.${image.extname}`
      await image.moveToDisk(key)
      data.image = await drive.use().getUrl(key)

      const whatWeDo = await WhatWeDo.create(data)
      createdWhatWeDos.push(whatWeDo)
    }

    return response
      .status(201)
      .json(successResponse('What we dos created successfully', createdWhatWeDos))
  }
}
