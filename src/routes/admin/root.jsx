import React from 'react';
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
} from 'react-icons/bs';
import { IoMdStopwatch } from 'react-icons/io';
import { IoSettingsOutline, IoHomeOutline } from 'react-icons/io5';
import { MdOutlineAddToPhotos } from 'react-icons/md';
import { CgMoreVerticalO } from 'react-icons/cg';
import { FiFolder, FiLayers } from 'react-icons/fi';
import { BiListUl } from 'react-icons/bi';

function Root() {
  return (
    <div className='w-full h-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]'>
      <div
        id='plotano-logo'
        className='py-2 pl-4 pr-8 border-r-4 border-r-slate-100 border-b-4 border-b-slate-100 flex items-center justify-center'
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
    <div id='admin-header' className='flex border-b-4 border-b-slate-100'>
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

function SideNavLink({to, name, Icon}) {
  const link = 'flex items-center py-2 px-8 hover:bg-slate-100 text-slate-500 transition-all cursor-pointer select-none';
  const active = 'flex items-center py-2 px-8 transition-all cursor-pointer select-none border-r-4 border-r-mainBlue bg-blue-100 text-mainBlue font-semibold';
  const pending = 'flex items-center py-2 px-8 transition-all cursor-pointer select-none bg-slate-100';
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isActive
          ? active
          : isPending
          ? pending
          : link
      }
    >
      <Icon className='text-xl' />
      <h2 className='ml-4 font-subHeading self-end'>{name}</h2>
    </NavLink>
  )
}

SideNavLink.propTypes = {
  to: PropTypes.string,
  name: PropTypes.string,
  Icon: PropTypes.func
}

function AdminSideNav() {
  return (
    <nav id='side-nav' className='border-r-4 border-r-slate-100 pt-4'>
      <SideNavLink to={'/admin/'} name={'Dashboard'} Icon={IoHomeOutline}/>
      <SideNavLink to={'/admin/customers'} name={'Customers'} Icon={BsPeople}/>
      <SideNavLink to={'/admin/projects'} name={'Projects'} Icon={FiFolder}/>
      <SideNavLink to={'/admin/tasks'} name={'Tasks'} Icon={BiListUl}/>
      <SideNavLink to={'/admin/leads'} name={'Leads'} Icon={BsTelephoneInbound}/>
      <SideNavLink to={'/admin/sales'} name={'Sales'} Icon={BsWallet2}/>
      <SideNavLink to={'/admin/subscriptions'} name={'Subsriptions'} Icon={FiLayers}/>
      <SideNavLink to={'/admin/support'} name={'Support'} Icon={BsChatLeftText}/>
      <SideNavLink to={'/admin/knowledge-base'} name={'Knowledge Base'} Icon={BsFiles}/>
      <SideNavLink to={'/admin/other'} name={'Other'} Icon={CgMoreVerticalO}/>
    </nav>
  );
}
