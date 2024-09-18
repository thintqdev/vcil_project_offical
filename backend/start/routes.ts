/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('login', '#controllers/Admin/auth_controller.login').prefix('api/admin')

router
  .group(() => {
    router.group(() => {
      router
        .group(() => {
          router.post('/', '#controllers/Admin/programs_controller.store')
          router.get('/', '#controllers/Admin/programs_controller.index')
          router.get('/:id', '#controllers/Admin/programs_controller.show')
          router.put('/:id', '#controllers/Admin/programs_controller.update')
          router.delete('/:id', '#controllers/Admin/programs_controller.destroy')
        })
        .prefix('programs')

      router
        .group(() => {
          router.post('/', '#controllers/Admin/categories_controller.store')
          router.get('/', '#controllers/Admin/categories_controller.index')
          router.get('/:id', '#controllers/Admin/categories_controller.show')
          router.put('/:id', '#controllers/Admin/categories_controller.update')
          router.delete('/:id', '#controllers/Admin/categories_controller.destroy')
        })
        .prefix('categories')

      router
        .group(() => {
          router.post('/', '#controllers/Admin/blogs_controller.store')
          router.get('/', '#controllers/Admin/blogs_controller.index')
          router.get('/:id', '#controllers/Admin/blogs_controller.show')
          router.put('/:id', '#controllers/Admin/blogs_controller.update')
          router.delete('/:id', '#controllers/Admin/blogs_controller.destroy')
        })
        .prefix('blogs')

      router
        .group(() => {
          router.get('/', '#controllers/Admin/tags_controller.index')
        })
        .prefix('tags')

      router.group(() => {
        router
          .group(() => {
            router.post('/', '#controllers/Admin/general_settings_controller.store')
            router.get('/', '#controllers/Admin/general_settings_controller.show')
            router.put('/:id', '#controllers/Admin/general_settings_controller.update')
          })
          .prefix('general-settings')

        router
          .group(() => {
            router.post('/', '#controllers/Admin/networks_controller.store')
            router.get('/', '#controllers/Admin/networks_controller.index')
            router.get('/:id', '#controllers/Admin/networks_controller.show')
            router.put('/:id', '#controllers/Admin/networks_controller.update')
            router.delete('/:id', '#controllers/Admin/networks_controller.destroy')
          })
          .prefix('networks')

        router.group(() => {
          router
            .group(() => {
              router.post('/', '#controllers/Admin/what_we_dos_controller.store')
              router.get('/', '#controllers/Admin/what_we_dos_controller.index')
            })
            .prefix('what-we-dos')
        })
      })
    })
    router
      .group(() => {
        router.get('/', '#controllers/Admin/profiles_controller.me')
      })
      .prefix('me')
  })
  // .use(middleware.auth({ guards: ['admin'] }))
  .prefix('api/admin')

// Front routes
router
  .group(() => {
    router
      .group(() => {
        router.get('/upcoming', '#controllers/Admin/programs_controller.index')
      })
      .prefix('programs')

    router
      .group(() => {
        router.get('/', '#controllers/Admin/general_settings_controller.show')
      })
      .prefix('settings')

    router
      .group(() => {
        router.get('/', '#controllers/Admin/what_we_dos_controller.index')
      })
      .prefix('what-we-dos')
  })
  .prefix('api')
