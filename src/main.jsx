import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App'
import Products from "./pages/Products"
import Cart from './pages/Cart'
import ErrorPage from './pages/ErrorPage'
import Checkout from './pages/Checkout'
import CartArray from './components/CartArray'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/products",
        element: <Products />,
        errorElement: <ErrorPage />
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <CartArray />,
            errorElement: <ErrorPage />
          },
          {
            path: "checkout",
            element: <Checkout />,
            errorElement: <ErrorPage />
          }
        ]
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
