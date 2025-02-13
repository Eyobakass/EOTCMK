import { useState } from 'react'
import {SearchIcon, MenuIcon}  from '@heroicons/react/outline';
import{XIcon} from '@heroicons/react/solid';
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/outline";

function SmallScreenNav({isOpen, toggleNav}){
    return (
        <div className={`fixed top-0 right-0 h-full w-[60%] bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-[100vw]'} ease-in-out duration-500`}>
            <nav className='flex justify-end bg-blue-400 h-[10vh]'>
                <button className='ml-auto' >
                    <SearchIcon className='text-black h-6 w-6 ' />
                </button>
                <button onClick={toggleNav} className='ml-auto mr-[1rem]'>
                    <XIcon className="h-6 w-6 text-black" />
                </button>
            </nav>
            <ul className='flex flex-col space-y-4 ml-[2rem] mt-[2rem]'>
                <li className='whitespace-nowrap flex justify-between hover:bg-slate-400 bg-slate-300 ease-in duration-150 w-[85%] p-3 rounded-lg'>
                  <a href='#' className=''>ቀዳሚ ገጽ</a>
                  <ChevronRightIcon className='text-gray-600 h-[1rem] '/>
                </li>
                <li className='whitespace-nowrap flex justify-between hover:bg-slate-400 bg-slate-300 ease-in duration-150 w-[85%] p-3 rounded-lg'>
                  <a href='#'>ስለ ማኅበሩ</a>                  
                  <ChevronRightIcon className='text-gray-600 h-[1rem]'/>
                </li>
                <li className='whitespace-nowrap flex justify-between hover:bg-slate-400 bg-slate-300 ease-in duration-150 w-[85%] p-3 rounded-lg'>
                  <a href='#'>ትምህርቶች</a>
                  <ChevronRightIcon className='text-gray-600 h-[1rem]'/>
                </li>
                <li className='whitespace-nowrap flex justify-between hover:bg-slate-400 bg-slate-300 ease-in duration-150 w-[85%] p-3 rounded-lg'>
                  <a href='#'>ጊቢ ጉባኤ</a>
                  <ChevronRightIcon className='text-gray-600 h-[1rem]'/>
                </li>
                <li className='whitespace-nowrap flex justify-between hover:bg-slate-400 bg-slate-300 ease-in duration-150 w-[85%] p-3 rounded-lg'>
                  <a href='#'>ሌሎች ድረ ገጾች</a>
                  <ChevronRightIcon className='text-gray-600 h-[1rem]'/>
                </li>
                <li className='whitespace-nowrap flex justify-between hover:bg-slate-400 bg-slate-300 ease-in duration-150 w-[85%] p-3 rounded-lg'>
                  <a href='#'>ቋንቋ</a>
                  <ChevronRightIcon className='text-gray-600 h-[1rem]'/>
                </li>
                <li className='whitespace-nowrap flex justify-between hover:bg-slate-400 bg-slate-300 ease-in duration-150 w-[85%] p-3 rounded-lg'>
                  <a href='#'>ያግኙን</a>
                  <ChevronRightIcon className='text-gray-600 h-[1rem]'/>
                </li>                
            </ul>
        </div>
    )
}
function Logo() {
    return (
      <div className="flex items-center space-x-4">
        {/* Logo Image */}
        <img src="logo.png" alt="MK-Logo" className="w-20 h-auto ml-4 md:w-16" />
  
        {/* Text Content */}
        <div className="text-left">
          <h2 className="text-black text-lg font-semibold leading-snug md:text-[0.8rem] mainLogo:text-lg ">
            በኢትዮጵያ ኦርቶዶድስ ተዋህዶ ቤተክርስቲያን <br />
            በሰንበት ትምህርት ቤቶች ማደራጃ መምሪያ
          </h2>
          <h2 className="text-red-600 text-lg font-bold md:text-[0.8rem] mainLogo:text-lg ">
            ማኅበራዊ ጉዳዮች
          </h2>
        </div>
      </div>
    );
  }
  
function Body() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div>
        <header className="flex justify-between bg-[url('cloud.png')] bg-cover bg-center backdrop-blur-sm h-[15vh]">
            <Logo/>
            <nav className='h-[100%]'>
                <ul className="hidden md:flex space-x-4 text-gray h-[100%] items-center">
                    <li className='whitespace-nowrap'><a href='#' className=''>ቀዳሚ ገጽ</a></li>
                    <li className='whitespace-nowrap'><a href='#'>ስለ ማኅበሩ</a></li>
                    <li className='whitespace-nowrap'><a href='#'>ትምህርቶች</a></li>
                    <li className='whitespace-nowrap'><a href='#'>ጊቢ ጉባኤ</a></li>
                    <li className='whitespace-nowrap'><a href='#'>ሌሎች ድረ ገጾች</a></li>
                    <li className='whitespace-nowrap'><a href='#'>ቋንቋ</a></li>
                    <li className='whitespace-nowrap'><a href='#'>ያግኙን</a></li>
                </ul>
            </nav>
            <button className='ml-[1rem] '>
                <SearchIcon className='text-blue-500 h-6 w-6 md:mr-[1rem] ' />
            </button>

            <button className='mr-[1rem] md:hidden'>
                <MenuIcon className="h-6 w-6 text-gray-700 rotate-180 ease-out duration-500" onClick={toggleNav } />
            </button>
        </header>
        <section className='bg-[#295CA4] h-[40vh]'>
            <h2 className=' bg-[black] bg-opacity-[0.5] bg w-max m-auto text-center text-3xl text-white whitespace-nowrap pl-[0.5rem] pr-[0.5rem]'>እንኳን ደህና መጡ!</h2>
            <img src='logo.png' className='justify-center m-auto  h-[35vh]'/>
        </section>
        <SmallScreenNav isOpen={isOpen} toggleNav={toggleNav}/>
    </div>
  )
}

export default Body