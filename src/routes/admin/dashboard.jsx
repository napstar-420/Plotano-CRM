import React from 'react';
import PropTypes from 'prop-types';
import { BsCreditCard, BsCurrencyDollar } from 'react-icons/bs';

function Dashboard() {
  return (
    <div className='bg-[#f5f9fa] w-full h-full py-4 px-4'>
      <header className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-2'>
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
    </div>
  );
}

export default Dashboard;

function HeaderCard({ value, name, Icon, color }) {
  const borders = {
    green: 'border-b-green-300',
    blue: 'border-b-blue-300',
    orange: 'border-b-orange-300',
    red: 'border-b-red-300',
  }
  const text = {
    green: 'text-green-300',
    blue: 'text-blue-300',
    orange: 'text-orange-300',
    red: 'text-red-300',
  }
  return (
    <div className={`bg-white py-8 px-6 flex-1 flex items-center justify-between rounded shadow shadow-gray-300 border-b-4 ${borders[color]}`}>
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
