import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

import autoRoutes from 'pages-generated'
import { setupLayouts } from 'virtual:generated-layouts'
import NProgress from 'nprogress'
import { ViteSSG } from 'vite-ssg'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat.js'
import { inject } from '@vercel/analytics'
import { createPinia } from 'pinia'

import App from './App.vue'

const routes = setupLayouts(autoRoutes)

const pinia = createPinia()

function scrollBehavior(_to: any, _from: any, savedPosition: any) {
  if (savedPosition)
    return savedPosition
  else
    return { top: 0 }
}

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ app, router, isClient, initialState }) => {
    dayjs.extend(LocalizedFormat)
    inject()

    app.use(pinia)

    if (isClient) {
      pinia.state.value = (initialState.pinia) || {}

      router.beforeEach(() => {
        NProgress.start()
      })
      router.afterEach(() => {
        NProgress.done()
      })
    }
    else {
      initialState.pinia = pinia.state.value
    }
  },
)
