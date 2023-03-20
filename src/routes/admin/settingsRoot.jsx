import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AdminHeader } from './root';
import { RxExit } from 'react-icons/rx';
import { MdExpandMore } from 'react-icons/md';

function SettingsRoot() {
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='grid grid-cols-[auto_1fr]'>
        <div className='w-52 border-b border-b-white flex items-center bg-[#2d4356] text-white'>
          <NavLink
            to={'/admin/'}
            className='text-[#22aeda] flex items-center gap-2 text-lg p-4'
          >
            <RxExit className='rotate-180 text-xl' />
            Exit
          </NavLink>
        </div>
        <AdminHeader />
      </div>
      <SettingsNav />
      <Outlet />
    </div>
  );
}

function SettingsNav() {
  const settingsTab = [
    {
      name: 'Main Setting',
      children: [
        { name: 'General Settings' },
        { name: 'Modules' },
        { name: 'Company Details' },
        { name: 'Currency' },
        { name: 'Theme' },
        { name: 'Company Logo' },
        { name: 'Cron Job Settings' },
        { name: 'Clear Cache' },
        { name: 'Error Logs' },
      ],
    },
    {
      name: 'Clients',
      children: [
        { name: 'General Settings' },
        { name: 'Categories' },
        { name: 'Custom Fields' },
        { name: 'Email Templates' },
      ],
    },
    {
      name: 'Projects',
      children: [
        { name: 'General Settings' },
        { name: 'Categories' },
        { name: 'Team Permissions' },
        { name: 'Client Permissions' },
        { name: 'Custom Fields' },
        { name: 'Automation' },
      ],
    },
    {
      name: 'Tasks',
      children: [
        { name: 'General Settings' },
        { name: 'Statuses' },
        { name: 'Custom Fields' },
      ],
    },
    {
      name: 'Leads',
      children: [
        { name: 'General Settings' },
        { name: 'Categories' },
        { name: 'Lead Stages' },
        { name: 'Lead Sources' },
        { name: 'Custom Fields' },
        { name: 'Web Forms' },
        { name: 'Email Templates' },
      ],
    },
    {
      name: 'Milestones',
      children: [{ name: 'General Settings' }, { name: 'Default Milestones' }],
    },
    {
      name: 'Invoices',
      children: [{ name: 'General Settings' }, { name: 'Categories' }],
    },
    {
      name: 'Estimates',
      children: [
        { name: 'General Settings' },
        { name: 'Categories' },
        { name: 'Automation' },
      ],
    },
    {
      name: 'Proposals',
      children: [{ name: 'General Settings' }, { name: 'Categories' }],
    },
    {
      name: 'Products',
      children: [{ name: 'Categories' }],
    },
    {
      name: 'Expenses',
      children: [{ name: 'General Settings' }, { name: 'Categories' }],
    },
    {
      name: 'Subscription',
      children: [{ name: 'General Settings' }],
    },
    {
      name: 'Tax',
      children: [{ name: 'Tax Rates' }],
    },
    {
      name: 'Tags',
      children: [{ name: 'General Settings' }, { name: 'View Tags' }],
    },
    {
      name: 'Files',
      children: [
        { name: 'General Settings' },
        { name: 'Folders' },
        { name: 'Default Folders' },
      ],
    },
    {
      name: 'Payment Methods',
      children: [
        { name: 'Paypal' },
        { name: 'Stripe' },
        { name: 'Razorpay' },
        { name: 'Mobile' },
        { name: 'Bank' },
      ],
    },
    {
      name: 'Email',
      children: [
        { name: 'General Settings' },
        { name: 'Email Templates' },
        { name: 'SMTP Settings' },
        { name: 'Email Queue' },
        { name: 'Email Log' },
      ],
    },
    {
      name: 'Webmail',
      children: [{ name: 'Templates' }],
    },
    {
      name: 'User Roles',
      children: [{ name: 'General Settings' }],
    },
    {
      name: 'Tickets',
      children: [
        { name: 'General Settings' },
        { name: 'Departments' },
        { name: 'Custom Fields' },
      ],
    },
    {
      name: 'Knowledgebase',
      children: [{ name: 'General Settings' }, { name: 'Categories' }],
    },
    {
      name: 'Other',
      children: [{ name: 'Updates' }],
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <div
      id='admin_setting_nav'
      className='w-52 bg-[#2d4356] grow py-8 grid gap-4 overflow-y-auto'
    >
      {settingsTab.map((setting, index) => {
        const { name, children } = setting;
        return (
          <div key={index}>
            <div
              onClick={() => {
                if (active === name) {
                  setActive(null);
                } else {
                  setActive(name);
                }
              }}
              className={`border-l-[3px] py-1 ${
                active === name
                  ? 'text-mainBlue border-l-mainBlue'
                  : 'text-[#7b889d] border-l-transparent'
              } hover:text-mainBlue  font-normal px-4 cursor-pointer font-subHeading grid grid-cols-[1fr_auto]`}
            >
              {name}
              <MdExpandMore
                className={`place-self-center text-xl transition-transform ${
                  active === name ? 'rotate-0' : '-rotate-90'
                } text-[#7b889d]`}
              />
            </div>
            <div
              className={`${
                active === name ? 'max-h-[1000px]' : 'h-0'
              } overflow-hidden`}
            >
              <div className='pl-8 pt-1 flex flex-col'>
                {children.map((child, c_index) => {
                  const { name } = child;
                  return (
                    <div
                      key={c_index}
                      className='text-[#7b889d] py-1 hover:text-mainBlue cursor-pointer'
                    >
                      {name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SettingsRoot;
