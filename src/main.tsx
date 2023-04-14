import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root, {loader as routLoader, action as rootAction} from './routes/root';
import EditContact, { action as editAction} from './routes/edit';
import ErrorPage from './error-page';
import Contact, {loader as contactLoader, action as contactAction} from './routes/contact';
import { action as destroyAction } from './routes/destroy';
import Index from './routes';

const JSXRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />} path='/' errorElement={<ErrorPage/>} action={rootAction} loader={routLoader}>
      <Route errorElement={<ErrorPage/>}>
        <Route element={<Contact/>} path='contacts/:contactId' loader={contactLoader} action={contactAction} />
        <Route index={true} element={<Index />} />
        {/* In general, all routes should have their own loaders */}
        <Route element={<EditContact/>} path='contacts/:contactId/edit' loader={contactLoader} action={editAction}/>
        <Route element={<EditContact/>} path='contacts/:contactId/destroy' action={destroyAction} errorElement={<div>Oops there was an erro</div>}/>
      </Route>
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     loader: routLoader,
//     action: rootAction,
//     children: [
//       {
//         path: "/contacts/:contactId",
//         element: <Contact />
//       },
//     ],
//   },
// ])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={JSXRouter} />
  </React.StrictMode>,
)
