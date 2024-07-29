import { ReactElement, StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ListingPage } from './components/ListingPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ListingPage />
  }
])

export default function App(): ReactElement {
  return (
    <div className="fixed inset-0 flex flex-col text-gray-700">
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
      <div className="flex-shrink-0 w-full border-t border-slate-100 px-6 box-border">
        Nav
      </div>
    </div>
  )
}
