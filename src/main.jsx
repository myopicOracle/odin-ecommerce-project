import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Cart from './pages/Cart.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <ErrorPage />,
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
