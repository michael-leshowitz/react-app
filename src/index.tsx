import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Root from "./routes/root"
import ErrorPage from "./error-page"
import Contact from "./routes/contact"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Issue with web-vitals not being found. Commenting out for now
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // Note errorElement did not work during tutorial... Unsure if this is because of the element 's code
    errorElement: <ErrorPage />,
    // children routes will render inside their parent. To do so, we need to tell the parent where to render child routes
    // This uses the <Outlet>
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ]
  },
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
