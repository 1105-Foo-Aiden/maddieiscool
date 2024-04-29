'use client'
import React from 'react'
import Logo from '@/Assets/Logo.png'

export default function NavbarComponent() {
  return (
    <div className='bg-gradient-to-r from-[#AEE6D9] to-[#3EBE9F] min-h-28 flex justify-between'>
    <img src={Logo.src} alt="Logo" className='ml-10 h-1/2' />
    <div className='h-16 w-16 rounded-full bg-blue-500 mr-5 mt-5 border-solid border-2 border-black' data-dropdown-toggle="dropdown "></div>

<div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>

    </div>
  )
}
