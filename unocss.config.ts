import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts } from 'unocss'
import { presetDaisy } from 'unocss-preset-daisy'

export default defineConfig({
  presets: [
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetAttributify(),
    presetUno(),
    presetTypography(),
    presetDaisy({
      themes: [
        {
          brand: {
            'primary': '#8285f4',
            'secondary': '#a855f7',
            'accent': '#ffc107',
            'neutral': '#191D24',
            'base-100': '#2A303C',
            'info': '#3ABFF8',
            'success': '#36D399',
            'warning': '#FBBD23',
            'error': '#F87272',
          },
        },
      ],
    }),
    presetWebFonts({
      fonts: {
        sans: 'Poppins:400,500,600,700',
        roboto: 'Roboto:400',
      },
    }),
  ],
})
