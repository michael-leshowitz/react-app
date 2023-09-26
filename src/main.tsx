import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import Root, { loader as routLoader, action as rootAction } from './routes/root'
import ErrorPage from './error-page'
import Index from './routes'
import RecipeSearchResults from './routes/recipeSearchResult'

const JSXRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />} path='/' errorElement={<ErrorPage/>} action={rootAction} loader={routLoader}>
      <Route errorElement={<ErrorPage/>}>
        <Route index={true} element={<Index />} />
        <Route element={<RecipeSearchResults />} path='recipe/search/:keyword'/>
        {/* In general, all routes should have their own loaders */}
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={JSXRouter} />
  </React.StrictMode>
)
