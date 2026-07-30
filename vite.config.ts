import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/asabu-bus-transfer-navi/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: '麻生バス乗継ナビ',
        short_name: '麻生バス',
        description: '地下鉄さっぽろ駅から麻生駅経由のバス乗継案内',
        theme_color: '#111827',
        background_color: '#f3f4f6',
        display: 'standalone',
        start_url: '/asabu-bus-transfer-navi/',
        scope: '/asabu-bus-transfer-navi/'
      },
      workbox: {
        navigateFallback: '/asabu-bus-transfer-navi/index.html',
        globPatterns: ['**/*.{js,css,html,json}']
      }
    })
  ]
})
