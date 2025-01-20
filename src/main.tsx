import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/route.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'
import { Toaster } from 'sonner';
import { store } from './Redux/store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router}>
        </RouterProvider>
        <Toaster position="top-right" />
      </ThemeProvider>
    </Provider>
  </StrictMode >,
)
