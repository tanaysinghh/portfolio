import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'

function inlineCriticalAssets(): Plugin {
  return {
    name: 'inline-critical-assets',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (!ctx.bundle) return html
        let output = html
        for (const [fileName, chunk] of Object.entries(ctx.bundle)) {
          if (chunk.type !== 'asset') continue
          if (fileName.endsWith('.css')) {
            const tag = new RegExp(`<link[^>]*href="/${fileName}"[^>]*>`)
            output = output.replace(tag, () => `<style>${String(chunk.source)}</style>`)
            delete ctx.bundle[fileName]
          }
        }
        const font = Object.keys(ctx.bundle).find((name) =>
          /inter-latin-wght-normal-.*\.woff2$/.test(name),
        )
        if (font) {
          output = output.replace(
            '</title>',
            `</title>\n    <link rel="preload" href="/${font}" as="font" type="font/woff2" crossorigin />`,
          )
        }
        return output
      },
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), inlineCriticalAssets()],
})
