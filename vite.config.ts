import pages from '@hono/vite-cloudflare-pages'
import honox from 'honox/vite'
import client from 'honox/vite/client'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
  const plugins = [tsconfigPaths()]

  if (mode === 'client') {
    return {
      plugins: [...plugins, client()]
    }
  } else {
    return {
      plugins: [...plugins, honox(), pages()],
    }
  }
})
