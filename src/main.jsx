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
import SignUp from './routes/sign_up.jsx';
import ErrorPage from './errorPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' errorElement={<ErrorPage />}>
      <Route index element={<Root />}/>
      <Route path='login'>
        <Route path='admin' element={<Login type={'admin'}/>} />
        <Route path='client' element={<Login type={'client'}/>} />
        <Route path='staff' element={<Login type={'staff'}/>} />
      </Route>
      <Route path='sign-up'>
        <Route path='admin' element={<SignUp type={'admin'}/>}/>
        <Route path='client' element={<SignUp type={'client'}/>}/>
        <Route path='staff' element={<SignUp type={'staff'}/>}/>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
