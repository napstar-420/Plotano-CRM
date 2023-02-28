import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import Root from './routes/root.jsx';
import Login from './routes/login.jsx';
import ErrorPage from './errorPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' errorElement={<ErrorPage />}>
      <Route index element={<Root />}/>
      <Route path='/login/admin' element={<Login />} />
      <Route path='/login/client' element={<Login />} />
      <Route path='/login/staff' element={<Login />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
