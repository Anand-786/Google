import Image from 'next/image'
import React, { useRef } from 'react'
import { useRouter } from 'next/router';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = e => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if(!term) return;
        router.push(`/search?term=${term}`);
    }
  return (
    <header className='sticky top-0 bg-white w-screen md:w-full'>
        <div className='flex w-full sm:p-6 px-2 py-6 items-center'>
            <Image src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            height={40} width={120} className='cursor-pointer' onClick={() => router.push('/')} />

            <form className='flex flex-1 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center
            px-3 py-3 sm:px-6 sm:py-3 ml-1 mr-1 sm:ml-10 sm:mr-5'>
                <input type='text' ref={searchInputRef} 
                className='flex-1 w-full focus:outline-none text-sm sm:text-base'
                defaultValue={router.query.term} />
                <XIcon className='h-5 sm:h-7 sm:mr-3 cursor-pointer text-gray-500 large' onClick={() => searchInputRef.current.value=''} />
                <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex 
                text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer' />
                <SearchIcon className='large h-6 text-blue-500 hidden sm:inline-flex' onClick={search} />
                <button hidden type='submit' onClick={search}>Search</button>
            </form>
            <Avatar className='ml-auto' url='./profile.jpg' />
        </div>
        {/* Header Options */}
        <HeaderOptions />
    </header>
  )
}

export default Header