import React, { useState } from 'react';
import { FaSort } from 'react-icons/fa';
import { MdAddCircle, MdOutlineDeleteOutline } from 'react-icons/md';
import { FiEdit, FiLock } from 'react-icons/fi';
import {HiOutlineMail} from 'react-icons/hi';

function TeamMembers() {
  const teamMembers = [
    {
      name: 'Zeeshan Toor',
      img_url:
        'https://ca.slack-edge.com/T039P46J8H4-U039VPBH683-71bfabf04236-512',
      position: 'CEO',
      role: 'Administration',
      email: 'admin@plotano.com',
      phone: '+92-300-1234567',
      lastSeen: 0.5,
    },
    {
      name: 'Shehroz Nabi',
      img_url:
        'https://ca.slack-edge.com/T039P46J8H4-U03BTC29EH3-c300d40aaed7-512',
      position: 'Project Manager',
      role: 'Administration',
      email: 'shehroznabi@plotano.com',
      phone: '+92-300-1234567',
      lastSeen: 5,
    },
    {
      name: 'Miss Nimra',
      img_url:
        'https://ca.slack-edge.com/T039P46J8H4-U04GL6N0YA1-495db456abdc-512',
      position: 'Full stack developer',
      role: 'Administration',
      email: 'nimra@plotano.com',
      phone: '+92-300-1234567',
      lastSeen: 0,
    },
    {
      name: 'Zohaib Khan',
      img_url:
        'https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/327158037_510413394310132_6466590203991898071_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHqNtDXEYsPj9OP1j5s6GVA8_0sqDPXSR7z_SyoM9dJHmEJ_wVs8F6_DDMNR1DC1FQm0uPpi5_ChWwcXR8HL3A4&_nc_ohc=MlDMDEk2H0cAX8rKrlM&_nc_ht=scontent.flhe13-1.fna&oh=00_AfDvbaGhOpm-j5udbUJwa8wAqro2XUlBi8xqxy0SLlk8kg&oe=64097A49',
      position: 'Frontend Developer',
      role: 'Staff',
      email: 'napstar@plotano.com',
      phone: '+92-322-3947372',
      lastSeen: 5353515,
    },
    {
      name: 'Abdul Rehman',
      img_url:
        'https://ca.slack-edge.com/T039P46J8H4-U03MC83KHHQ-071778bc7812-512',
      position: 'Graphic Designer',
      role: 'Staff',
      email: 'ab@plotano.com',
      phone: '+92-300-1234567',
      lastSeen: 10,
    },
  ];
  
  const [members, setMembers] = useState(teamMembers);
  const [isSortByName, setIsSortByName] = useState(false);
  const [isSortByRole, setIsSortByRole] = useState(false);
  const [isSortByLastSeen, setIsSortByLastSeen] = useState(false);

  function sortByName() {
    const membersCopy = [...teamMembers];
    const sortedMembers = membersCopy.sort((mem1, mem2) => {
      const name1 = mem1.name.toLowerCase();
      const name2 = mem2.name.toLowerCase();
      if (name1 > name2) {
        if (isSortByName) return -1;
        return 1;
      }
      if (name1 < name2) {
        if (isSortByName) return 1;
        return -1
      }
      return 0;
    });
    setMembers(sortedMembers);
    setIsSortByName(!isSortByName);
  }

  function sortByRole() {
    const membersCopy = [...teamMembers];
    // eslint-disable-next-line no-unused-vars
    const sortedMembers = membersCopy.sort((mem1, _) => {
      const role1 = mem1.role.toLowerCase();
      if (role1 === 'administration') {
        if (isSortByRole) return 1;
        return -1;
      }
      if (role1 === 'staff') {
        if (isSortByRole) return -1;
        return 1
      }
      return 0;
    });
    setMembers(sortedMembers);
    setIsSortByRole(!isSortByRole);
  }

  function sortByLastSeen() {
    const membersCopy = [...teamMembers];
    const sortedMembers = membersCopy.sort((mem1, mem2) => {
      if (mem1.lastSeen < mem2.lastSeen) {
        if (isSortByLastSeen) return -1;
        return 1; 
      }
      if (mem1.lastSeen > mem2.lastSeen) {
        if (isSortByLastSeen) return 1;
        return -1; 
      }
      return 0;
    })
    setMembers(sortedMembers);
    setIsSortByLastSeen(!isSortByLastSeen);
  }

  return (
    <div className='w-full h-full overflow-scroll bg-lightBlue py-2 px-4 grid grid-rows-[auto_1fr] gap-4'>
      <header className='flex justify-between items-center'>
        <h2 className='text-xl font-subHeading font-medium text-mainBlue'>
          Team Members
        </h2>
        <div className='flex gap-2'>
          <button className='self-center text-3xl origin-center scale-125 ml-1 transition-colors text-rose-400 hover:text-rose-500'>
            <MdAddCircle />
          </button>
        </div>
      </header>
      <main className='py-8 bg-white rounded'>
        <table className='w-full' cellPadding="0.5rem"  id="admin_team_members_table">
          <thead>
            <tr>
              <th className='pl-8'>
                <button onClick={sortByName} className='flex items-center gap-2 font-subHeading text-mainBlue hover:text-cyan-700'>
                  Name <FaSort />
                </button>
              </th>
              <th>
                <div className='flex items-center gap-2 font-subHeading text-mainBlue'>
                  Position
                </div>
              </th>
              <th>
                <button onClick={sortByRole} className='flex items-center gap-2 font-subHeading text-mainBlue hover:text-cyan-700'>
                  Role <FaSort />
                </button>
              </th>
              <th>
                <div className='flex items-center gap-2 font-subHeading text-mainBlue'>
                  Email 
                </div>
              </th>
              <th>
                <div className='flex items-center gap-2 font-subHeading text-mainBlue'>
                  Phone 
                </div>
              </th>
              <th>
                <button onClick={sortByLastSeen} className='flex items-center gap-2 font-subHeading text-mainBlue hover:text-cyan-700'>
                  Last seen <FaSort />
                </button>
              </th>
              <th className='pr-8'>
                <div className='flex items-center gap-2 font-subHeading text-mainBlue'>
                  Action
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => {
                const {name, img_url,position, role, email, phone, lastSeen} = member;
              return <tr key={index} >
                <td className='flex items-center gap-2 pl-8'>
                  <div className={`w-8 h-8 bg-cover bg-center rounded-full`} style={{backgroundImage: `url('${img_url}')`}}>
                  </div>
                  {name || '---'}
                </td>
                <td>{position || '---'}</td>
                <td>{role || '---'}</td>
                <td>{email || '---'}</td>
                <td>{phone || '---'}</td>
                <td>{lastSeen === 0 ? 'online' : lastSeen < 1 ? 'Just now' : lastSeen > 3600 ? 'A day ago': `${lastSeen} mins ago`}</td>
                <td className=''>
                  <div className='w-full h-full flex items-center gap-1'>
                    <button className='text-xl text-red-300 hover:text-red-400' title='delete'><MdOutlineDeleteOutline /></button>
                    <button className='text-xl text-yellow-300 hover:text-yellow-400' title='edit'><FiEdit /></button>
                    <button className='text-xl text-blue-300 hover:text-blue-400' title='mail'><HiOutlineMail /></button>
                    <button className='text-xl text-slate-300 hover:text-slate-400' title='lock'><FiLock /></button>
                  </div>
                </td>
              </tr>;
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default TeamMembers;
