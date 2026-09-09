import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Caminho relativo: garante que os arquivos carreguem no GitHub Pages
  // mesmo quando o site fica em /nome-do-repositorio (evita tela em branco).
  base: './',
})
