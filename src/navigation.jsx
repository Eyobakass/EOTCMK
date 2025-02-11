import { useState } from 'react'
import {SearchIcon}  from '@heroicons/react/outline';



function SmallScreenNav(){

}
function Logo() {
    return (
      <div className="flex items-center space-x-4">
        {/* Logo Image */}
        <img src="logo.png" alt="MK-Logo" className="w-24 h-auto ml-4" />
  
        {/* Text Content */}
        <div className="text-left">
          <h2 className="text-black text-lg font-semibold leading-snug">
            በኢትዮጵያ ኦርቶዶድስ ተዋህዶ ቤተክርስቲያን <br />
            በሰንበት ትምህርት ቤቶች ማደራጃ መምሪያ
          </h2>
          <h2 className="text-red-600 text-lg font-bold">
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
                <ul className="hidden md:flex space-x-4 text-gray">
                    <li className='whitespace-nowrap'><a href='#' className=''>ቀዳሚ ገጽ</a></li>
                    <li className='whitespace-nowrap'><a href='#'>ስለ ማኅበሩ</a></li>
                    <li className='whitespace-nowrap'><a href='#'>ትምህርቶች</a></li>
                    <li className='whitespace-nowrap'><a href='#'>ጊቢ ጉባኤ</a></li>
                    <li className='whitespace-nowrap'><a href='#'>ሌሎች ድረ ገጾች</a></li>
                    <li className='whitespace-nowrap'><a href='#'>ቋንቋ</a></li>
                    <li className='whitespace-nowrap'><a href='#'>ያግኙን</a></li>
                </ul>
            </nav>
            <button>
                <SearchIcon className='text-blue-500'/>
            </button>;
            <button></button>
        </header>
        <section className='bg-[#295CA4] h-[40vh]'>
            <h2 className=' bg-[black] bg-opacity-[0.5] bg w-[30vw] m-auto text-center text-3xl text-white'>እንኳን ደህና መጡ!</h2>
            <img src='logo.png' className='justify-center m-auto  h-[35vh] '/>
        </section>
    </div>
  )
}

export default Body