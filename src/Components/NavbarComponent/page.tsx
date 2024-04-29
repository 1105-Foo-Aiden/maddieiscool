'use client'
import React from 'react'
import Logo from '@/Assets/Logo.png'

export default function NavbarComponent() {
  return (
    <div className='bg-gradient-to-r from-[#AEE6D9] to-[#3EBE9F] min-h-28 flex justify-between'>
    <img src={Logo.src} alt="Logo" className='ml-10 h-1/2' />
    <div className='h-16 w-16 rounded-full bg-blue-500 mr-5 mt-5 border-solid border-2 border-black '></div>
    </div>
  )
}
