import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Actualiza la app automáticamente cuando subas cambios
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'maskable-icon.png'],
      manifest: {
        name: 'Recetitas App',
        short_name: 'Recetitas',
        description: 'Tu aplicación de recetas favorita full para celular',
        theme_color: '#ffffff', // Color de la barra de estado del celular
        background_color: '#ffffff', // Color de fondo al abrir la app
        display: 'standalone', // ¡CLAVE! Hace que se abra a pantalla completa sin barra de navegador
        orientation: 'portrait', // Bloquea la app en modo vertical
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable' // Permite que Android adapte el icono a círculos o cuadrados
          }
        ]
      }
    })
  ]
})