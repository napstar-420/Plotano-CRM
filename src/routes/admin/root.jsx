import React from 'react';
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
import { CiSquareMore } from 'react-icons/ci';
import { GrTask } from 'react-icons/gr';
import { FiFolder, FiLayers } from 'react-icons/fi';

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
          <BsBell className='text-2xl text-slate-600' />
        </div>
        <div className='header-icon'>
          <IoMdStopwatch className='text-2xl text-slate-600' />
        </div>
        <div className='header-icon'>
          <IoSettingsOutline className='text-2xl text-slate-600' />
        </div>
        <div className='header-icon'>
          <MdOutlineAddToPhotos className='text-2xl text-red-600' />
        </div>
        <div className='header-icon'>
          <BsGlobe className='text-2xl text-slate-600' />
        </div>
        <div className='header-icon'>
          <img
            className='w-6 h-6 select-none'
            src='https://cdn-icons-png.flaticon.com/512/219/219983.png'
            alt=''
          />
          <h4 className='select-none font-subHeading text-slate-600 ml-2'>
            Admin
          </h4>
        </div>
      </div>
    </div>
  );
}

function AdminSideNav() {
  return (
    <nav id='side-nav' className='border-r-4 border-r-slate-100 pt-4'>
      <NavLink
        to={'/admin/'}
        className={({ isActive, isPending }) =>
          isActive
            ? 'side-nav-link active'
            : isPending
            ? 'side-nav-link pending'
            : 'side-nav-link'
        }
      >
        <IoHomeOutline className='nav-icon' />
        <h2>Dashboard</h2>
      </NavLink>
      <NavLink
        to={'/admin/customers'}
        className={({ isActive, isPending }) =>
          isActive
            ? 'side-nav-link active'
            : isPending
            ? 'side-nav-link pending'
            : 'side-nav-link'
        }
      >
        <BsPeople className='nav-icon' />
        <h2>Customers</h2>
      </NavLink>
      <NavLink
        to={'/admin/projects'}
        className={({ isActive, isPending }) =>
          isActive
            ? 'side-nav-link active'
            : isPending
            ? 'side-nav-link pending'
            : 'side-nav-link'
        }
      >
        <FiFolder className='nav-icon' />
        <h2>Projects</h2>
      </NavLink>
      <NavLink
        to={'/admin/tasks'}
        className={({ isActive, isPending }) =>
          isActive
            ? 'side-nav-link active'
            : isPending
            ? 'side-nav-link pending'
            : 'side-nav-link'
        }
      >
        <GrTask className='nav-icon' />
        <h2>Tasks</h2>
      </NavLink>
      <NavLink
        to={'/admin/leads'}
        className={({ isActive, isPending }) =>
          isActive
            ? 'side-nav-link active'
            : isPending
            ? 'side-nav-link pending'
            : 'side-nav-link'
        }
      >
        <BsTelephoneInbound className='nav-icon' />
        <h2>Leads</h2>
      </NavLink>
      <NavLink
        to={'/admin/sales'}
        className={({ isActive, isPending }) =>
          isActive
            ? 'side-nav-link active'
            : isPending
            ? 'side-nav-link pending'
            : 'side-nav-link'
        }
      >
        <BsWallet2 className='nav-icon' />
        <h2>Sales</h2>
      </NavLink>
      <NavLink
        to={'/admin/subscriptions'}
        className={({ isActive, isPending }) =>
          isActive
            ? 'side-nav-link active'
            : isPending
            ? 'side-nav-link pending'
            : 'side-nav-link'
        }
      >
        <FiLayers className='nav-icon' />
        <h2>Subscriptions</h2>
      </NavLink>
      <NavLink
        to={'/admin/support'}
        className={({ isActive, isPending }) =>
          isActive
            ? 'side-nav-link active'
            : isPending
            ? 'side-nav-link pending'
            : 'side-nav-link'
        }
      >
        <BsChatLeftText className='nav-icon' />
        <h2>Support</h2>
      </NavLink>
      <NavLink
        to={'/admin/knowledge-base'}
        className={({ isActive, isPending }) =>
          isActive
            ? 'side-nav-link active'
            : isPending
            ? 'side-nav-link pending'
            : 'side-nav-link'
        }
      >
        <BsFiles className='nav-icon' />
        <h2>Knowledge base</h2>
      </NavLink>
      <NavLink
        to={'/admin/others'}
        className={({ isActive, isPending }) =>
          isActive
            ? 'side-nav-link active'
            : isPending
            ? 'side-nav-link pending'
            : 'side-nav-link'
        }
      >
        <CiSquareMore className='nav-icon' />
        <h2>Other</h2>
      </NavLink>
      <div>
        <h2></h2>
      </div>
    </nav>
  );
}
