import { useState } from 'react'
import {SearchIcon}  from '@heroicons/react/outline';
import { MenuIcon } from '@heroicons/react/outline';



function SmallScreenNav(){
    return (
        <div>
            
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
  const [count, setCount] = useState(0)

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
            <button className='right-0'>
                <SearchIcon className='text-blue-500 h-6 w-6  ' />
            </button>

            <button className='m-[1rem]'>
                <MenuIcon className="h-6 w-6 text-gray-700 " />
            </button>
        </header>
        <section className='bg-[#295CA4] h-[40vh]'>
            <h2 className=' bg-[black] bg-opacity-[0.5] bg w-max m-auto text-center text-3xl text-white whitespace-nowrap pl-[0.rem] pr-[0.5rem]'>እንኳን ደህና መጡ!</h2>
            <img src='logo.png' className='justify-center m-auto  h-[35vh] '/>
        </section>
    </div>
  )
}

export default Body