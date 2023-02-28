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
import ForgotPassword from './routes/forgotPassword.jsx'
import ErrorPage from './errorPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' errorElement={<ErrorPage />}>
      <Route index element={<Root />}/>
      <Route path='admin'>
        <Route path='login' element={<Login type={'admin'}/>} />
        <Route path='sign-up' element={<SignUp type={'admin'}/>} />
        <Route path='forgotPassword' element={<ForgotPassword type={'admin'}/>} />
      </Route>
      <Route path='client'>
        <Route path='login' element={<Login type={'client'}/>}/>
        <Route path='sign-up' element={<SignUp type={'client'}/>}/>
        <Route path='forgotPassword' element={<ForgotPassword type={'clint'}/>}/>
      </Route>
      <Route path='staff'>
        <Route path='login' element={<Login type={'staff'}/>}/>
        <Route path='sign-up' element={<SignUp type={'staff'}/>}/>
        <Route path='forgotPassword' element={<ForgotPassword type={'staff'}/>}/>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
