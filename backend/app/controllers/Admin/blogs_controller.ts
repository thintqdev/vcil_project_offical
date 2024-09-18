import type { HttpContext } from '@adonisjs/core/http'

import Blog from '#models/blog'
import { errorResponse, successResponse } from '../../../helpers/helpers.js'
import { cuid } from '@adonisjs/core/helpers'
import drive from '@adonisjs/drive/services/main'
import Tag from '#models/tag'

export default class BlogsController {
  async index({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)

    const blogs = await Blog.query().paginate(page, limit)

    return response.status(200).json(successResponse('Blogs fetched successfully', blogs))
  }

  async store({ request, response }: HttpContext) {
    const image = request.file('image', {
      size: '10mb',
      extnames: ['jpg', 'png', 'jpeg'],
    })
    const data = request.only([
      'title',
      'short_description',
      'description',
      'admin_id',
      'category_id',
      'published_at',
    ])

    if (!image) {
      return response.status(400).json(errorResponse('Image is required'))
    }

    const key = `images/blogs/${cuid()}.${image.extname}`
    await image.moveToDisk(key)
    data.image = await drive.use().getUrl(key)

    const blog = await Blog.create(data)

    const tags = request.input('tags')
    if (tags && Array.isArray(tags)) {
      const tagIds = []
      for (const tagObj of tags) {
        const tagName = tagObj.name
        let tag = await Tag.findBy('name', tagName)
        if (!tag) {
          tag = await Tag.create({ name: tagName })
        }
        tagIds.push(tag.id)
      }
      await blog.related('tags').attach(tagIds)
    }

    return response.status(200).json(successResponse('Blog created successfully', blog))
  }

  async show({ params, response }: HttpContext) {
    const blog = await Blog.find(params.id)

    if (!blog) {
      return response.status(404).json(errorResponse('Blog not found'))
    }

    return response.status(200).json(successResponse('Blog fetched successfully', blog))
  }

  async update({ params, request, response }: HttpContext) {
    const blog = await Blog.find(params.id)

    if (!blog) {
      return response.status(404).json(errorResponse('Blog not found'))
    }

    const image = request.file('image', {
      size: '10mb',
      extnames: ['jpg', 'png', 'jpeg'],
    })
    const data = request.only([
      'title',
      'short_description',
      'description',
      'admin_id',
      'category_id',
      'published_at',
    ])

    if (image) {
      const key = `images/blogs/${cuid()}.${image.extname}`
      await image.moveToDisk(key)
      data.image = await drive.use().getUrl(key)
    }

    blog.merge(data)
    await blog.save()

    const tags = request.input('tags')
    if (tags && Array.isArray(tags)) {
      const tagIds = []
      for (const tagObj of tags) {
        const tagName = tagObj.name
        let tag = await Tag.findBy('name', tagName)
        if (!tag) {
          tag = await Tag.create({ name: tagName })
        }
        tagIds.push(tag.id)
      }
      await blog.related('tags').sync(tagIds)
    }

    return response.status(200).json(successResponse('Blog updated successfully', blog))
  }

  async destroy({ params, response }: HttpContext) {
    const blog = await Blog.find(params.id)

    if (!blog) {
      return response.status(404).json(errorResponse('Blog not found'))
    }

    await blog.delete()

    return response.status(200).json(successResponse('Blog deleted successfully'))
  }
}
