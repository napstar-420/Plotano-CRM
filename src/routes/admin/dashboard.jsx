import React from 'react';
import PropTypes from 'prop-types';
import { BsCreditCard, BsCurrencyDollar } from 'react-icons/bs';
import { Chart } from "react-google-charts";


function Dashboard() {
  return (
    <div className='bg-[#f5f9fa] w-full h-full p-4 grid md:grid-cols-[1fr_1fr] lg:grid-cols-[2.8fr_1.2fr] gap-4'>
      <Header />
      <IncomeVsExpenses />
      <Leads />
      <LatestActivity />
      <Projects />
    </div>
  );
}

export default Dashboard;

function Header() {
  return (
    <header className='row md:col-start-1 md:col-end-3 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-2'>
      <HeaderCard
        value={'50k'}
        name={'Payments - Today'}
        Icon={BsCreditCard}
        color={'green'}
      />
      <HeaderCard
        value={'746k'}
        name={'Payments - Month'}
        Icon={BsCreditCard}
        color={'blue'}
      />
      <HeaderCard
        value={'78k'}
        name={'Invoices - Due'}
        Icon={BsCurrencyDollar}
        color={'orange'}
      />
      <HeaderCard
        value={'12k'}
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
    <div className='bg-white py-4 px-8 shadow rounded  md:col-start-1 md:col-end-3 lg:col-end-2'>
      <h4 className='font-heading text-gray-500'>Latest Activity</h4>
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
      <div className='flex items-center gap-4 border-b-2 pb-3 border-b-gray-100'>
        <div className={`${colors[color]} text-sm leading-none text-white grid place-items-center w-7 h-7 rounded-full font-heading`}>{totalNumber}</div>
        <div>
          <h5 className='font-subHeading text-gray-500 text-sm font-semibold'>{name}</h5>
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
    <div className='bg-white py-4 px-6 shadow h-max w-full rounded row-start-4 row-end-5 md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-4'>
      <h4 className='font-heading text-gray-500'>Projects</h4>
      <div className='my-4 grid gap-3'>
        <ProjectTab totalNumber={4} name={'Not Started'} mine={1} color={'gray'}/>
        <ProjectTab totalNumber={7} name={'In Progress'} mine={4} color={'blue'}/>
        <ProjectTab totalNumber={3} name={'On Hold'} mine={1} color={'orange'}/>
        <ProjectTab totalNumber={9} name={'Completed'} mine={16} color={'green'}/>
      </div>
    </div>
  )
}

function IncomeVsExpenses() {
  const chartEvents = [
    {
      eventName: "select",
      callback({ chartWrapper }) {
        console.log("Selected ", chartWrapper.getChart().getSelection());
      }
    }
  ];
  
  const data = [
    ['Month', 'Expenses', 'Income'],
    ['Jan', 1000, 2000],
    ['Feb', 1200, 1800],
    ['Mar', 800, 2500],
    ['Apr', 1500, 3000],
    ['May', 2000, 2200],
    ['Jun', 1800, 2800],
    ['Jul', 1300, 3200],
    ['Aug', 1700, 2700],
    ['Sep', 1200, 2900],
    ['Oct', 1400, 3100],
    ['Nov', 1600, 2600],
    ['Dec', 1900, 2400],
  ];

  return (
    <div className="chart-container bg-white md:col-start-1 md:col-end-3 lg:col-end-2 py-4 px-8 rounded shadow font-heading">
      <div className='flex flex-col sm:flex-row justify-between'>
        <h2 className='font-heading text-gray-500'>Expenses vs Income</h2>
        <div className='flex gap-2 items-center mt-2 sm:mt-0 self-end sm:self-auto'>
          <span className='text-[0.75rem] px-3 py-1 rounded-full bg-green-400 text-white g'>Income</span>
          <span className='text-[0.75rem] px-3 py-1 rounded-full bg-red-400 text-white g'>Expenses</span>
        </div>
      </div>
      <div className='mt-6 h-44 lg:h-80'>
        <Chart
          chartType="Line"
          data={data}
          chartEvents={chartEvents}
          options={{
            hAxis: {
              title: '',
            },
            vAxis: {
              title: '',
            },
            chartArea: {
              width: '80%',
              height: '80%',
            },
            legend: {
              position: 'none'
            },
            colors: ['#fca5a5', '#86efac'],
            fontName: "'Montserrat', sans-serif",
            fontWeight: '700',
            fontSize: '1.5rem'
          }}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
  
}

function Leads() {

  const data = [
    ['Task', 'Hours per Day'],
    ['New', 256],
    ['Contacted', 4],
    ['Qualified', 69],
    ['Disqualified', 12],
    ['Proposal Sent', 45],
    ['Converted', 7],
  ]

  return (
    <div className='bg-white w-full shadow py-2 px-4 grid grid-rows-[auto_1fr]'>
      <div className='w-full flex items-center justify-between'>
        <h4 className='font-heading text-gray-500'>Leads</h4>
        <span className='text-sm text-gray-400 font-subHeading'>This year</span>
      </div>
      <div className='w-full'>
        <Chart
          width={'100%'}
          height={'100%'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={data}
          options={{
            legend: {
              position: 'bottom'
            },
            chartArea: {
              width: '80%',
              height: '80%',
            },
            pieHole: 0.5,
          }}
        />
      </div>
    </div>
  );
  
}