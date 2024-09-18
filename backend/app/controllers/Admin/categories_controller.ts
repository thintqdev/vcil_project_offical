import Category from '#models/category'
import type { HttpContext } from '@adonisjs/core/http'
import { errorResponse, successResponse } from '../../../helpers/helpers.js'
import { cuid } from '@adonisjs/core/helpers'
import drive from '@adonisjs/drive/services/main'

export default class CategoriesController {
  async index({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)

    const categories = await Category.query().paginate(page, limit)

    return response.status(200).json(successResponse('Categories fetched successfully', categories))
  }

  async store({ request, response }: HttpContext) {
    const image = request.file('image', {
      size: '10mb',
      extnames: ['jpg', 'png', 'jpeg'],
    })
    const data = request.only(['name', 'type'])

    if (!image) {
      return response.status(400).json(errorResponse('Image is required'))
    }

    const key = `images/categories/${cuid()}.${image.extname}`
    await image.moveToDisk(key)
    data.image = await drive.use().getUrl(key)

    const category = await Category.create(data)

    return response.status(200).json(successResponse('Category created successfully', category))
  }

  async show({ params, response }: HttpContext) {
    const category = await Category.find(params.id)

    if (!category) {
      return response.status(404).json(errorResponse('Category not found'))
    }

    return response.status(200).json(successResponse('Category fetched successfully', category))
  }

  async update({ params, request, response }: HttpContext) {
    const category = await Category.find(params.id)

    if (!category) {
      return response.status(404).json(errorResponse('Category not found'))
    }

    const image = request.file('image', {
      size: '10mb',
      extnames: ['jpg', 'png', 'jpeg'],
    })
    const data = request.only(['name', 'type'])

    if (image) {
      const key = `images/programs/${cuid()}.${image.extname}`
      await image.moveToDisk(key)
      data.image = await drive.use().getUrl(key)
    }

    category.merge(data)
    await category.save()

    return response.status(200).json(successResponse('Category updated successfully', category))
  }

  async destroy({ params, response }: HttpContext) {
    const category = await Category.find(params.id)

    if (!category) {
      return response.status(404).json(errorResponse('Category not found'))
    }

    await category.delete()

    return response.status(200).json(successResponse('Category deleted successfully'))
  }
}
