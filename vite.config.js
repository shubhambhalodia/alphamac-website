import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve, extname, join } from 'path'
import { createReadStream, existsSync, copyFileSync, mkdirSync, readdirSync, statSync } from 'fs'

const MIME = {
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.gif': 'image/gif', '.webp': 'image/webp', '.pdf': 'application/pdf',
}

function copyDir(src, dest) {
  mkdirSync(dest, { recursive: true })
  for (const file of readdirSync(src)) {
    const s = `${src}/${file}`, d = `${dest}/${file}`
    statSync(s).isDirectory() ? copyDir(s, d) : copyFileSync(s, d)
  }
}

function rootAssetsPlugin() {
  return {
    name: 'root-assets',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0] ?? ''
        if (url.startsWith('/image/') || url === '/Brochure.pdf') {
          const filePath = join(process.cwd(), url)
          if (existsSync(filePath)) {
            const mime = MIME[extname(filePath).toLowerCase()] ?? 'application/octet-stream'
            res.setHeader('Content-Type', mime)
            createReadStream(filePath).pipe(res)
            return
          }
        }
        next()
      })
    },
    closeBundle() {
      try { copyDir('image', 'dist/image') } catch {}
      try { copyFileSync('Brochure.pdf', 'dist/Brochure.pdf') } catch {}
    },
  }
}

export default defineConfig({
  plugins: [
    vue({ template: { transformAssetUrls: false } }),
    rootAssetsPlugin(),
  ],
  base: '/',
  publicDir: 'public',
  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
})
