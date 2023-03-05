import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';
import { Outlet, NavLink } from 'react-router-dom';
import {
  BsBell,
  BsGlobe,
  BsPeople,
  BsTelephoneInbound,
  BsWallet2,
  BsChatLeftText,
  BsFiles,
  BsDot
} from 'react-icons/bs';
import { IoMdStopwatch } from 'react-icons/io';
import { IoSettingsOutline, IoHomeOutline } from 'react-icons/io5';
import { MdExpandMore, MdOutlineAddToPhotos } from 'react-icons/md';
import { CgMoreVerticalO } from 'react-icons/cg';
import { FiFolder, FiLayers } from 'react-icons/fi';
import { BiListUl } from 'react-icons/bi';

function Root() {
  return (
    <div className='w-full h-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]'>
      <div
        id='plotano-logo'
        className='py-2 pl-8 pr-16 border-r-2 border-r-slate-300 border-b-2 border-2-slate-300 flex items-center justify-center'
      >
        <div className='w-6 mr-4'>
          <img className='w-full' src={logo} alt='' />
        </div>
        <div className='text-center'>
          <h4 className='font-heading font-semibold tracking-widest text-xl text-slate-700'>
            PLOTANO
          </h4>
          <p className='font-subHeading font-semibold tracking-widest text-[0.7rem] text-slate-700'>
            AGENCY
          </p>
        </div>
      </div>
      <AdminHeader />
      <AdminSideNav />
      <Outlet />
    </div>
  );
}

export default Root;

function AdminHeader() {
  return (
    <div id='admin-header' className='flex border-b-2 border-b-slate-200'>
      <div className='flex-1 flex items-center justify-start p-2'>
        <div className='toggle-side-nav-btn'>
          <div className='w-full h-[3px] bg-slate-500'></div>
          <div className='w-full h-[3px] bg-slate-500'></div>
          <div className='w-full h-[3px] bg-slate-500'></div>
        </div>
      </div>
      <div className='flex'>
        <div className='header-icon'>
          <BsBell className='text-2xl text-slate-400' />
        </div>
        <div className='header-icon'>
          <IoMdStopwatch className='text-2xl text-slate-400' />
        </div>
        <div className='header-icon'>
          <IoSettingsOutline className='text-2xl text-slate-400' />
        </div>
        <div className='header-icon'>
          <MdOutlineAddToPhotos className='text-2xl text-red-600' />
        </div>
        <div className='header-icon'>
          <BsGlobe className='text-2xl text-slate-400' />
        </div>
        <div className='header-icon'>
          <img
            className='w-6 h-6 select-none'
            src='https://cdn-icons-png.flaticon.com/512/219/219983.png'
            alt=''
          />
          <h4 className='select-none font-subHeading text-slate-400 ml-2'>
            Admin
          </h4>
        </div>
      </div>
    </div>
  );
}

function SideNavLink({ to, name, Icon, setExpand = (name) => console.log(name) }) {
  return (
    <NavLink
      to={to}
      onClick={() => setExpand(name)}
      className={({ isActive, isPending }) => {
        return `flex items-center py-2 px-8 ${
          isActive
            ? 'bg-blue-100 border-r-2 border-r-mainBlue text-mainBlue'
            : isPending
            ? 'bg-slate-100 text-slate-500'
            : 'hover:bg-slate-100 text-slate-500'
        } transition-all cursor-pointer select-none`;
      }}
    >
      <Icon className='text-xl' />
      <h2 className='ml-4 font-subHeading self-end'>{name}</h2>
    </NavLink>
  );
}

SideNavLink.propTypes = {
  to: PropTypes.string,
  name: PropTypes.string,
  Icon: PropTypes.func,
  childRoutes: PropTypes.array,
  setExpand: PropTypes.func,
};

function AdminSideNav() {
  const [expand, setExpand] = useState('null');
  const customerRoutes = [
    {
      name: 'Clients',
      route: '/admin/customers',
    },
    {
      name: 'Users',
      route: '/admin/customers-users',
    },
  ];
  const projectsRoutes = [
    {
      name: 'Projects',
      route: '/admin/projects',
    },
    {
      name: 'Templates',
      route: '/admin/project-template',
    },
  ];
  const salesRoutes = [
    {
      name: 'Invoices',
      route: '/admin/invoices'
    },
    {
      name: 'Payments',
      route: '/admin/payments'
    },
    {
      name: 'Estimates',
      route: '/admin/estimates'
    },
    {
      name: 'Products',
      route: '/admin/products'
    },
    {
      name: 'Expenses',
      route: '/admin/expenses'
    },
    {
      name: 'Proposals',
      route: '/admin/proposals'
    },
  ]
  const othersRoutes = [
    {
      name: 'Team Members',
      route: '/admin/team-members'
    },
    {
      name: 'Time Sheets',
      route: '/admin/time-sheets'
    },
    {
      name: 'Settings',
      route: '/admin/settings'
    },
  ]
  return (
    <nav id='side-nav' className='border-r-2 border-r-slate-200 pt-4'>
      {/* DASHBOARD */}
      <SideNavLink
        to={'/admin/'}
        name={'Dashboard'}
        Icon={IoHomeOutline}
        setExpand={setExpand}
      />
      {/* Customers */}
      <div className='grid'>
        <div
          onClick={() => expand === 'Customers' ? setExpand('null') : setExpand('Customers')}
          className={`flex items-center w-full py-2 pl-8 pr-2 transition-all cursor-pointer select-none hover:bg-slate-100 text-slate-500`}
        >
          <BsPeople className='text-xl' />
          <h2 className='ml-4 grow font-subHeading self-end'>Customers</h2>
          <MdExpandMore className={`transition-transform ${expand === 'Customers' ? '' : '-rotate-90'}`}/>
        </div>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            expand === 'Customers' ? 'max-h-28' : 'max-h-0'
          }`}
        >
          {customerRoutes.map((child, index) => {
            return (
              <NavLink
                to={child.route}
                key={index}
                className={({ isActive, isPending }) => {
                  return `flex items-center text-sm py-2 pl-8 pr-2 ${
                    isActive
                      ? 'bg-blue-100 border-r-2 border-r-mainBlue text-mainBlue'
                      : isPending
                      ? 'bg-slate-100 text-slate-500'
                      : 'hover:bg-slate-100 text-slate-500'
                  } transition-all cursor-pointer select-none`;
                }}
              >
                <BsDot className='text-xl'/>
                <h2 className='ml-4 font-subHeading self-end'>{child.name}</h2>
              </NavLink>
            );
          })}
        </div>
      </div>
      {/* PROJECTS */}
      <div className='grid'>
        <div
          onClick={() => expand === 'Projects' ? setExpand('null') : setExpand('Projects')}
          className={`flex items-center w-full py-2 pl-8 pr-2 transition-all cursor-pointer select-none hover:bg-slate-100 text-slate-500`}
        >
          <FiFolder className='text-xl' />
          <h2 className='ml-4 grow font-subHeading self-end'>Projects</h2>
          <MdExpandMore className={`transition-transform ${expand === 'Projects' ? '' : '-rotate-90'}`}/>
        </div>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            expand === 'Projects' ? 'max-h-28' : 'max-h-0'
          }`}
        >
          {projectsRoutes.map((child, index) => {
            return (
              <NavLink
                to={child.route}
                key={index}
                className={({ isActive, isPending }) => {
                  return `flex items-center text-sm py-2 pl-8 pr-2 ${
                    isActive
                      ? 'bg-blue-100 border-r-2 border-r-mainBlue text-mainBlue'
                      : isPending
                      ? 'bg-slate-100 text-slate-500'
                      : 'hover:bg-slate-100 text-slate-500'
                  } transition-all cursor-pointer select-none`;
                }}
              >
                <BsDot className='text-xl'/>
                <h2 className='ml-4 font-subHeading self-end'>{child.name}</h2>
              </NavLink>
            );
          })}
        </div>
      </div>
      {/* TASKS */}
      <SideNavLink
        to={'/admin/tasks'}
        name={'Tasks'}
        Icon={BiListUl}
        setExpand={setExpand}
      />
      {/* LEADS */}
      <SideNavLink
        to={'/admin/leads'}
        name={'Leads'}
        Icon={BsTelephoneInbound}
      />
      {/* SALES */}
      <div className='grid'>
        <div
          onClick={() => expand === 'Sales' ? setExpand('null') : setExpand('Sales')}
          className={`flex items-center w-full py-2 pl-8 pr-2 transition-all cursor-pointer select-none hover:bg-slate-100 text-slate-500`}
        >
          <BsWallet2 className='text-xl' />
          <h2 className='ml-4 grow font-subHeading self-end'>Sales</h2>
          <MdExpandMore className={`transition-transform ${expand === 'Sales' ? '' : '-rotate-90'}`}/>
        </div>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            expand === 'Sales' ? 'max-h-96' : 'max-h-0'
          }`}
        >
          {salesRoutes.map((child, index) => {
            return (
              <NavLink
                to={child.route}
                key={index}
                className={({ isActive, isPending }) => {
                  return `flex items-center text-sm py-2 pl-8 pr-2 ${
                    isActive
                      ? 'bg-blue-100 border-r-2 border-r-mainBlue text-mainBlue'
                      : isPending
                      ? 'bg-slate-100 text-slate-500'
                      : 'hover:bg-slate-100 text-slate-500'
                  } transition-all cursor-pointer select-none`;
                }}
              >
                <BsDot className='text-xl'/>
                <h2 className='ml-4 font-subHeading self-end'>{child.name}</h2>
              </NavLink>
            );
          })}
        </div>
      </div>
      {/* SUBSCRIPTIONS */}
      <SideNavLink
        to={'/admin/subscriptions'}
        name={'Subsriptions'}
        Icon={FiLayers}
        setExpand={setExpand}
      />
      {/* SUPPORT */}
      <SideNavLink
        to={'/admin/support'}
        name={'Support'}
        Icon={BsChatLeftText}
        setExpand={setExpand}
      />
      {/* KNOWLEDGE BASE */}
      <SideNavLink
        to={'/admin/knowledgeBase'}
        name={'Knowledge Base'}
        Icon={BsFiles}
        setExpand={setExpand}
      />
      {/* OTHERS */}
      <div className='grid'>
        <div
          onClick={() => expand === 'Others' ? setExpand('null') : setExpand('Others')}
          className={`flex items-center w-full py-2 pl-8 pr-2 transition-all cursor-pointer select-none hover:bg-slate-100 text-slate-500`}
        >
          <CgMoreVerticalO className='text-xl' />
          <h2 className='ml-4 grow font-subHeading self-end'>Others</h2>
          <MdExpandMore className={`transition-transform ${expand === 'Others' ? '' : '-rotate-90'}`}/>
        </div>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            expand === 'Others' ? 'max-h-28' : 'max-h-0'
          }`}
        >
          {othersRoutes.map((child, index) => {
            return (
              <NavLink
                to={child.route}
                key={index}
                className={({ isActive, isPending }) => {
                  return `flex items-center text-sm py-2 pl-8 pr-2 ${
                    isActive
                      ? 'bg-blue-100 border-r-2 border-r-mainBlue text-mainBlue'
                      : isPending
                      ? 'bg-slate-100 text-slate-500'
                      : 'hover:bg-slate-100 text-slate-500'
                  } transition-all cursor-pointer select-none`;
                }}
              >
                <BsDot className='text-xl'/>
                <h2 className='ml-4 font-subHeading self-end'>{child.name}</h2>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
