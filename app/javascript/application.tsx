import { createInertiaApp, type ResolvedComponent } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

const pages: Record<string, () => ResolvedComponent> = {
  'Dashboard/Index': () => require('./pages/Dashboard/Index.tsx'),
}

createInertiaApp({
  resolve: (name: string) => {
    const page = pages[name]
    if (!page) {
      throw new Error(`Unknown page: ${name}`)
    }
    return page()
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
