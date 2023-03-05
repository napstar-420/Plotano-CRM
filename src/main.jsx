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
import AdminLeads from './routes/admin/leads.jsx';
import AdminInvoices from './routes/admin/invoices.jsx';
import AdminPayments from './routes/admin/payments';
import AdminEstimates from './routes/admin/estimates.jsx';
import AdminProducts from './routes/admin/products.jsx';
import AdminExpenses from './routes/admin/expenses.jsx';
import AdminProposals from './routes/admin/proposals.jsx';
import AdminSubscriptions from './routes/admin/subscriptions.jsx';
import AdminSupport from './routes/admin/support.jsx';
import AdminKnowledgeBase from './routes/admin/knowledgeBase.jsx';
import AdminTeamMembers from './routes/admin/team-members';
import AdminTimeSheets from './routes/admin/timesheets.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' errorElement={<ErrorPage />}>
      <Route index element={<Root />}/>
      {/* ADMIN ROUTES */}
      <Route path='admin' element={<AdminRoot />}>
        <Route index element={<AdminDashboard />} />
        <Route path='customers' element={<AdminCustomerClients />}/>
        <Route path='customers-users' element={<AdminCustomerUsers />}/>
        <Route path='projects' element={<AdminProjects />}/>
        <Route path='project-template' element={<AdminProjectTemplate />}/>
        <Route path='tasks' element={<AdminTasks />} />
        <Route path='leads' element={<AdminLeads />} />
        <Route path='invoices' element={<AdminInvoices />} />
        <Route path='payments' element={<AdminPayments/>} />
        <Route path='estimates' element={<AdminEstimates />} />
        <Route path='products' element={<AdminProducts />} />
        <Route path='expenses' element={<AdminExpenses />} />
        <Route path='proposals' element={<AdminProposals />} />
        <Route path='subscriptions' element={<AdminSubscriptions />}/>
        <Route path='support' element={<AdminSupport />}/>
        <Route path='knowledgeBase' element={<AdminKnowledgeBase />}/>
        <Route path='team-members' element={<AdminTeamMembers />}/>
        <Route path='time-sheets' element={<AdminTimeSheets />}/>
        <Route path='settings' element={<div>Setting</div>}/>
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
