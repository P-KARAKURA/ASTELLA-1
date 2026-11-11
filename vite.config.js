import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  base: isProduction ? '/ASTELLA-1/' : '/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
