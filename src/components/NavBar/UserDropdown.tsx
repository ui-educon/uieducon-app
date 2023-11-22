import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from 'firebase/auth';
import firebaseAuth from '@/firebase.config';

type Props = {}

const UserDropdown = (props: Props) => {

  const logoutHandler = async () => {
    signOut(firebaseAuth);
  }

  return (
    <div className='absolute md:right-0 bg-gray-300 p-3 mt-2 rounded-lg'>
      <button className='flex gap-1 text-gray-700' onClick={logoutHandler}>
        <LogoutIcon />
        <span className='font-medium'>Logout</span>
      </button>
    </div>
  )
}

export default UserDropdown