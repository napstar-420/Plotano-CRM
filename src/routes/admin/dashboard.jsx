import React from 'react';
import PropTypes from 'prop-types';
import { BsCreditCard, BsCurrencyDollar } from 'react-icons/bs';

function Dashboard() {
  return (
    <div className='bg-[#f5f9fa] w-full h-full p-4 grid grid-cols-[3fr_1fr] grid-rows-[auto_1fr] gap-4'>
      <Header />
      <LatestActivity />
      <Projects />
    </div>
  );
}

export default Dashboard;

function Header() {
  return (
    <header className='row col-start-1 col-end-3 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-2'>
      <HeaderCard
        value={'0.00'}
        name={'Payments - Today'}
        Icon={BsCreditCard}
        color={'green'}
      />
      <HeaderCard
        value={'0.00'}
        name={'Payments - Month'}
        Icon={BsCreditCard}
        color={'blue'}
      />
      <HeaderCard
        value={'0.00'}
        name={'Invoices - Due'}
        Icon={BsCurrencyDollar}
        color={'orange'}
      />
      <HeaderCard
        value={'0.00'}
        name={'invoices - Overdue'}
        Icon={BsCurrencyDollar}
        color={'red'}
      />
    </header>
  );
}

function HeaderCard({ value, name, Icon, color }) {
  const borders = {
    green: 'border-b-green-300',
    blue: 'border-b-blue-300',
    orange: 'border-b-orange-300',
    red: 'border-b-red-300',
  };
  const text = {
    green: 'text-green-300',
    blue: 'text-blue-300',
    orange: 'text-orange-300',
    red: 'text-red-300',
  };
  return (
    <div
      className={`bg-white py-8 px-6 flex-1 flex items-center justify-between rounded shadow shadow-gray-300 border-b-4 ${borders[color]}`}
    >
      <div>
        <h2 className='font-heading text-2xl text-slate-600'>${value}</h2>
        <p className='text-sm text-slate-500 font-subHeading'>{name}</p>
      </div>
      <div className=''>
        <Icon className={`text-3xl ${text[color]}`} />
      </div>
    </div>
  );
}

HeaderCard.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  Icon: PropTypes.func,
  color: PropTypes.string,
};

function LatestActivity() {
  return (
    <div className='bg-white py-4 px-8 shadow rounded'>
      <h4 className='text-xl font-heading text-slate-700'>Latest Activity</h4>
    </div>
  )
}

function Projects() {

  const colors = {
    gray: 'bg-gray-700',
    blue: 'bg-blue-400',
    orange: 'bg-orange-400',
    green: 'bg-green-400',
  }
  function ProjectTab({totalNumber, name, mine, color}) {
    return (
      <div className='flex items-center gap-4'>
        <div className={`${colors[color]} leading-none text-white grid place-items-center w-8 h-8 rounded-full font-heading`}>{totalNumber}</div>
        <div>
          <h5 className='font-subHeading text-slate-600 font-semibold'>{name}</h5>
          <p className='font-casual text-slate-500 text-sm'>Assigned to me: <span className='font-semibold'>{mine}</span></p>
        </div>
      </div>
    )
  }

  ProjectTab.propTypes = {
    totalNumber: PropTypes.number,
    name: PropTypes.string,
    mine: PropTypes.number,
    color: PropTypes.string,
  }

  return (
    <div className='bg-white py-4 px-6 shadow h-max w-full rounded'>
      <h4 className='text-xl font-heading text-slate-700'>Projects</h4>
      <div className='my-4 grid gap-3'>
        <ProjectTab totalNumber={4} name={'Not Started'} mine={1} color={'gray'}/>
        <ProjectTab totalNumber={7} name={'In Progress'} mine={4} color={'blue'}/>
        <ProjectTab totalNumber={3} name={'On Hold'} mine={1} color={'orange'}/>
        <ProjectTab totalNumber={9} name={'Completed'} mine={16} color={'green'}/>
      </div>
    </div>
  )
}