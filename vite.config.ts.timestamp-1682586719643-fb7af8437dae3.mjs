// vite.config.ts
import { resolve } from 'node:path'
import { defineConfig } from 'file:///C:/Users/dougl/Projects/workout-app/node_modules/.pnpm/vite@4.3.3_@types+node@18.16.1/node_modules/vite/dist/node/index.js'
import Vue from 'file:///C:/Users/dougl/Projects/workout-app/node_modules/.pnpm/@vitejs+plugin-vue@4.2.1_vite@4.3.3_vue@3.2.47/node_modules/@vitejs/plugin-vue/dist/index.mjs'
import Pages from 'file:///C:/Users/dougl/Projects/workout-app/node_modules/.pnpm/vite-plugin-pages@0.29.0_vite@4.3.3/node_modules/vite-plugin-pages/dist/index.mjs'
import Layouts from 'file:///C:/Users/dougl/Projects/workout-app/node_modules/.pnpm/vite-plugin-vue-layouts@0.8.0_vite@4.3.3_vue-router@4.1.6_vue@3.2.47/node_modules/vite-plugin-vue-layouts/dist/index.mjs'
import Components from 'file:///C:/Users/dougl/Projects/workout-app/node_modules/.pnpm/unplugin-vue-components@0.24.1_rollup@2.79.1_vue@3.2.47/node_modules/unplugin-vue-components/dist/vite.mjs'
import AutoImport from 'file:///C:/Users/dougl/Projects/workout-app/node_modules/.pnpm/unplugin-auto-import@0.15.3_@vueuse+core@10.1.0_rollup@2.79.1/node_modules/unplugin-auto-import/dist/vite.js'
import { VitePWA } from 'file:///C:/Users/dougl/Projects/workout-app/node_modules/.pnpm/vite-plugin-pwa@0.14.7_vite@4.3.3_workbox-build@6.5.4_workbox-window@6.5.4/node_modules/vite-plugin-pwa/dist/index.mjs'
import Inspect from 'file:///C:/Users/dougl/Projects/workout-app/node_modules/.pnpm/vite-plugin-inspect@0.7.24_rollup@2.79.1_vite@4.3.3/node_modules/vite-plugin-inspect/dist/index.mjs'
import Inspector from 'file:///C:/Users/dougl/Projects/workout-app/node_modules/.pnpm/vite-plugin-vue-inspector@3.4.0_vite@4.3.3/node_modules/vite-plugin-vue-inspector/dist/index.mjs'
import Unocss from 'file:///C:/Users/dougl/Projects/workout-app/node_modules/.pnpm/unocss@0.51.8_postcss@8.4.23_rollup@2.79.1_vite@4.3.3/node_modules/unocss/dist/vite.mjs'
import Icons from 'file:///C:/Users/dougl/Projects/workout-app/node_modules/.pnpm/unplugin-icons@0.16.1/node_modules/unplugin-icons/dist/vite.mjs'
import IconsResolver from 'file:///C:/Users/dougl/Projects/workout-app/node_modules/.pnpm/unplugin-icons@0.16.1/node_modules/unplugin-icons/dist/resolver.mjs'
import SVG from 'file:///C:/Users/dougl/Projects/workout-app/node_modules/.pnpm/vite-svg-loader@4.0.0/node_modules/vite-svg-loader/index.js'
import VueMacros from 'file:///C:/Users/dougl/Projects/workout-app/node_modules/.pnpm/unplugin-vue-macros@2.0.0_@vueuse+core@10.1.0_rollup@2.79.1_vite@4.3.3_vue@3.2.47/node_modules/unplugin-vue-macros/dist/vite.mjs'
import WebfontDownload from 'file:///C:/Users/dougl/Projects/workout-app/node_modules/.pnpm/vite-plugin-webfont-dl@3.7.3_vite@4.3.3/node_modules/vite-plugin-webfont-dl/dist/index.mjs'

const __vite_injected_original_dirname = 'C:\\Users\\dougl\\Projects\\workout-app'
const vite_config_default = defineConfig({
  resolve: {
    alias: [
      { find: '~/', replacement: `${resolve(__vite_injected_original_dirname, 'src')}/` },
    ],
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      '@vueuse/head',
      'dayjs',
      'dayjs/plugin/localizedFormat',
    ],
  },
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/],
        }),
      },
    }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],
    }),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
      ],
      vueTemplate: true,
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
    Inspect(),
    Icons({
      defaultClass: 'inline',
      defaultStyle: 'vertical-align: sub;',
    }),
    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    Unocss(),
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Workout',
        short_name: 'Workout',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
    // https://github.com/antfu/vite-plugin-inspect
    // Visit http://localhost:3333/__inspect/ to see the inspector
    Inspect(),
    // https://github.com/webfansplz/vite-plugin-vue-inspector
    Inspector({
      toggleButtonVisibility: 'never',
    }),
    // https://github.com/feat-agency/vite-plugin-webfont-dl
    WebfontDownload(),
    Icons({
      defaultClass: 'inline',
      defaultStyle: 'vertical-align: sub;',
    }),
    SVG({
      svgo: false,
      defaultImport: 'url',
    }),
  ],
  build: {
    rollupOptions: {
      onwarn(warning, next) {
        if (warning.code !== 'UNUSED_EXTERNAL_IMPORT')
          next(warning)
      },
    },
  },
  ssgOptions: {
    formatting: 'minify',
    format: 'cjs',
  },
})
export {
  vite_config_default as default,
}
// # sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkb3VnbFxcXFxQcm9qZWN0c1xcXFx3b3Jrb3V0LWFwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcZG91Z2xcXFxcUHJvamVjdHNcXFxcd29ya291dC1hcHBcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2RvdWdsL1Byb2plY3RzL3dvcmtvdXQtYXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBQYWdlcyBmcm9tICd2aXRlLXBsdWdpbi1wYWdlcydcbmltcG9ydCBMYXlvdXRzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xuaW1wb3J0IEluc3BlY3QgZnJvbSAndml0ZS1wbHVnaW4taW5zcGVjdCdcbmltcG9ydCBJbnNwZWN0b3IgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWluc3BlY3RvcidcbmltcG9ydCBVbm9jc3MgZnJvbSAndW5vY3NzL3ZpdGUnXG5cbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJ1xuaW1wb3J0IEljb25zUmVzb2x2ZXIgZnJvbSAndW5wbHVnaW4taWNvbnMvcmVzb2x2ZXInXG5pbXBvcnQgU1ZHIGZyb20gJ3ZpdGUtc3ZnLWxvYWRlcidcblxuaW1wb3J0IFZ1ZU1hY3JvcyBmcm9tICd1bnBsdWdpbi12dWUtbWFjcm9zL3ZpdGUnXG5pbXBvcnQgV2ViZm9udERvd25sb2FkIGZyb20gJ3ZpdGUtcGx1Z2luLXdlYmZvbnQtZGwnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczogW1xuICAgICAgeyBmaW5kOiAnfi8nLCByZXBsYWNlbWVudDogYCR7cmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKX0vYCB9LFxuICAgIF0sXG4gIH0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGluY2x1ZGU6IFtcbiAgICAgICd2dWUnLFxuICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgJ0B2dWV1c2UvY29yZScsXG4gICAgICAnQHZ1ZXVzZS9oZWFkJyxcbiAgICAgICdkYXlqcycsXG4gICAgICAnZGF5anMvcGx1Z2luL2xvY2FsaXplZEZvcm1hdCcsXG4gICAgXSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIFZ1ZU1hY3Jvcyh7XG4gICAgICBwbHVnaW5zOiB7XG4gICAgICAgIHZ1ZTogVnVlKHtcbiAgICAgICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9oYW5ub2VydS92aXRlLXBsdWdpbi1wYWdlc1xuICAgIFBhZ2VzKHtcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ21kJ10sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vSm9obkNhbXBpb25Kci92aXRlLXBsdWdpbi12dWUtbGF5b3V0c1xuICAgIExheW91dHMoKSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi1hdXRvLWltcG9ydFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgaW1wb3J0czogW1xuICAgICAgICAndnVlJyxcbiAgICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgICAndnVlLWkxOG4nLFxuICAgICAgICAnQHZ1ZXVzZS9oZWFkJyxcbiAgICAgICAgJ0B2dWV1c2UvY29yZScsXG4gICAgICBdLFxuICAgICAgZHRzOiAnc3JjL2F1dG8taW1wb3J0cy5kLnRzJyxcbiAgICAgIGRpcnM6IFtcbiAgICAgICAgJ3NyYy9jb21wb3NhYmxlcycsXG4gICAgICAgICdzcmMvc3RvcmVzJyxcbiAgICAgIF0sXG4gICAgICB2dWVUZW1wbGF0ZTogdHJ1ZSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi12dWUtY29tcG9uZW50c1xuICAgIENvbXBvbmVudHMoe1xuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAnbWQnXSxcbiAgICAgIGR0czogdHJ1ZSxcbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvLCAvXFwubWQkL10sXG4gICAgICByZXNvbHZlcnM6IFtcbiAgICAgICAgSWNvbnNSZXNvbHZlcih7XG4gICAgICAgICAgY29tcG9uZW50UHJlZml4OiAnJyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0pLFxuXG4gICAgSW5zcGVjdCgpLFxuXG4gICAgSWNvbnMoe1xuICAgICAgZGVmYXVsdENsYXNzOiAnaW5saW5lJyxcbiAgICAgIGRlZmF1bHRTdHlsZTogJ3ZlcnRpY2FsLWFsaWduOiBzdWI7JyxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bm9jc3NcbiAgICAvLyBzZWUgdW5vLmNvbmZpZy50cyBmb3IgY29uZmlnXG4gICAgVW5vY3NzKCksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1wbHVnaW4tcHdhXG4gICAgVml0ZVBXQSh7XG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgICAgIGluY2x1ZGVBc3NldHM6IFsnZmF2aWNvbi5zdmcnXSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6ICdXb3Jrb3V0JyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ1dvcmtvdXQnLFxuICAgICAgICB0aGVtZV9jb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9wd2EtMTkyeDE5Mi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3B3YS01MTJ4NTEyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLWluc3BlY3RcbiAgICAvLyBWaXNpdCBodHRwOi8vbG9jYWxob3N0OjMzMzMvX19pbnNwZWN0LyB0byBzZWUgdGhlIGluc3BlY3RvclxuICAgIEluc3BlY3QoKSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJmYW5zcGx6L3ZpdGUtcGx1Z2luLXZ1ZS1pbnNwZWN0b3JcbiAgICBJbnNwZWN0b3Ioe1xuICAgICAgdG9nZ2xlQnV0dG9uVmlzaWJpbGl0eTogJ25ldmVyJyxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mZWF0LWFnZW5jeS92aXRlLXBsdWdpbi13ZWJmb250LWRsXG4gICAgV2ViZm9udERvd25sb2FkKCksXG4gICAgSWNvbnMoe1xuICAgICAgZGVmYXVsdENsYXNzOiAnaW5saW5lJyxcbiAgICAgIGRlZmF1bHRTdHlsZTogJ3ZlcnRpY2FsLWFsaWduOiBzdWI7JyxcbiAgICB9KSxcblxuICAgIFNWRyh7XG4gICAgICBzdmdvOiBmYWxzZSxcbiAgICAgIGRlZmF1bHRJbXBvcnQ6ICd1cmwnLFxuICAgIH0pLFxuICBdLFxuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG9ud2Fybih3YXJuaW5nLCBuZXh0KSB7XG4gICAgICAgIGlmICh3YXJuaW5nLmNvZGUgIT09ICdVTlVTRURfRVhURVJOQUxfSU1QT1JUJylcbiAgICAgICAgICBuZXh0KHdhcm5pbmcpXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHNzZ09wdGlvbnM6IHtcbiAgICBmb3JtYXR0aW5nOiAnbWluaWZ5JyxcbiAgICBmb3JtYXQ6ICdjanMnLFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVMsU0FBUyxlQUFlO0FBQzdULFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsZUFBZTtBQUN4QixPQUFPLGFBQWE7QUFDcEIsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sWUFBWTtBQUVuQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxTQUFTO0FBRWhCLE9BQU8sZUFBZTtBQUN0QixPQUFPLHFCQUFxQjtBQWpCNUIsSUFBTSxtQ0FBbUM7QUFtQnpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEVBQUUsTUFBTSxNQUFNLGFBQWEsR0FBRyxRQUFRLGtDQUFXLEtBQUssS0FBSztBQUFBLElBQzdEO0FBQUEsRUFDRjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxVQUFVO0FBQUEsTUFDUixTQUFTO0FBQUEsUUFDUCxLQUFLLElBQUk7QUFBQSxVQUNQLFNBQVMsQ0FBQyxVQUFVLE9BQU87QUFBQSxRQUM3QixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsQ0FBQztBQUFBO0FBQUEsSUFHRCxNQUFNO0FBQUEsTUFDSixZQUFZLENBQUMsT0FBTyxJQUFJO0FBQUEsSUFDMUIsQ0FBQztBQUFBO0FBQUEsSUFHRCxRQUFRO0FBQUE7QUFBQSxJQUdSLFdBQVc7QUFBQSxNQUNULFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxRQUNKO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQTtBQUFBLElBR0QsV0FBVztBQUFBLE1BQ1QsWUFBWSxDQUFDLE9BQU8sSUFBSTtBQUFBLE1BQ3hCLEtBQUs7QUFBQSxNQUNMLFNBQVMsQ0FBQyxVQUFVLGNBQWMsT0FBTztBQUFBLE1BQ3pDLFdBQVc7QUFBQSxRQUNULGNBQWM7QUFBQSxVQUNaLGlCQUFpQjtBQUFBLFFBQ25CLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFFRCxRQUFRO0FBQUEsSUFFUixNQUFNO0FBQUEsTUFDSixjQUFjO0FBQUEsTUFDZCxjQUFjO0FBQUEsSUFDaEIsQ0FBQztBQUFBO0FBQUE7QUFBQSxJQUlELE9BQU87QUFBQTtBQUFBLElBR1AsUUFBUTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsZUFBZSxDQUFDLGFBQWE7QUFBQSxNQUM3QixVQUFVO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBO0FBQUEsSUFJRCxRQUFRO0FBQUE7QUFBQSxJQUdSLFVBQVU7QUFBQSxNQUNSLHdCQUF3QjtBQUFBLElBQzFCLENBQUM7QUFBQTtBQUFBLElBR0QsZ0JBQWdCO0FBQUEsSUFDaEIsTUFBTTtBQUFBLE1BQ0osY0FBYztBQUFBLE1BQ2QsY0FBYztBQUFBLElBQ2hCLENBQUM7QUFBQSxJQUVELElBQUk7QUFBQSxNQUNGLE1BQU07QUFBQSxNQUNOLGVBQWU7QUFBQSxJQUNqQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsT0FBTyxTQUFTLE1BQU07QUFDcEIsWUFBSSxRQUFRLFNBQVM7QUFDbkIsZUFBSyxPQUFPO0FBQUEsTUFDaEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsWUFBWTtBQUFBLElBQ1osUUFBUTtBQUFBLEVBQ1Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
