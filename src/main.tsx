import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/route.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster position="top-right"/>
    </ThemeProvider>
  </StrictMode >,
)
