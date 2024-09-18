import GeneralSetting from '#models/general_setting'
import type { HttpContext } from '@adonisjs/core/http'
import { successResponse } from '../../../helpers/helpers.js'

export default class GeneralSettingsController {
  async store({ request, response }: HttpContext) {
    const data = request.only(['name', 'value'])

    const generalSettings = await GeneralSetting.updateOrCreate(
      {
        name: data.name,
      },
      {
        name: data.name,
        value: data.value,
      }
    )

    return response
      .status(201)
      .json(successResponse('General settings created successfully', generalSettings))
  }

  async show({ request, response }: HttpContext) {
    const generalSettings = await GeneralSetting.findBy('name', request.qs().name)

    if (!generalSettings) {
      return response.status(404).json({
        message: 'General settings not found',
      })
    }

    return response.json(successResponse('General settings fetched successfully', generalSettings))
  }

  async update({ request, response }: HttpContext) {
    const data = request.only(['name', 'value'])

    const generalSettings = await GeneralSetting.findBy('name', request.input('name'))

    if (!generalSettings) {
      return response.status(404).json({
        message: 'General settings not found',
      })
    }

    generalSettings.value = data.value

    await generalSettings.save()

    return response.json(successResponse('General settings updated successfully', generalSettings))
  }
}
