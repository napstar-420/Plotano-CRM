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
import ErrorPage from './errorPage.jsx';
import Login from './routes/login.jsx';
import SignUp from './routes/sign_up.jsx';
import ForgotPassword from './routes/forgotPassword.jsx';
import AdminRoot from './routes/admin/root.jsx';
import AdminDashboard from './routes/admin/dashboard.jsx';
import AdminCustomerClients from './routes/admin/customerClients.jsx';
import AdminCustomerUsers from './routes/admin/customerUsers.jsx';
import AdminProjects from './routes/admin/projects.jsx';
import AdminProjectTemplate from './routes/admin/projectTemplate.jsx';
import AdminTasks from './routes/admin/tasks.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' errorElement={<ErrorPage />}>
      <Route index element={<Root />}/>
      <Route path='admin' element={<AdminRoot />}>
        <Route index element={<AdminDashboard />} />
        <Route path='customers' element={<AdminCustomerClients />}/>
        <Route path='customers-users' element={<AdminCustomerUsers />}/>
        <Route path='projects' element={<AdminProjects />}/>
        <Route path='project-template' element={<AdminProjectTemplate />}/>
        <Route path='tasks' element={<AdminTasks />} />
        <Route path='*' element={<div>404 Page not found</div>} />
      </Route>
      {/* Authentication Routes */}
      <Route path='admin'>
        <Route path='login' element={<Login type={'admin'}/>} />
        <Route path='sign-up' element={<SignUp type={'admin'}/>} />
        <Route path='forgotPassword' element={<ForgotPassword type={'admin'}/>} />
      </Route>
      <Route path='client'>
        <Route path='login' element={<Login type={'client'}/>}/>
        <Route path='sign-up' element={<SignUp type={'client'}/>}/>
        <Route path='forgotPassword' element={<ForgotPassword type={'client'}/>}/>
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
