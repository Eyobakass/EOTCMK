import { useState } from 'react'
import { FaSearch } from "react-icons/fa"
import navigation from "./navigation.css"

function Body() {
  const [count, setCount] = useState(0)

  return (
    <header className='flex'>
        <img src='image_2025-02-11_10-24-24.png' alt='EOTCMK'className='w-[50vw] sm:w-[100vw]'/>
        <nav className='margin-auto'>
            <ul className='flex'>
                <li className='nowrap-whitespace-nowrap'><a href='#'>ቀዳሚ ገጽ</a></li>
                <li><a href='#'>ስለ ማኅበሩ</a></li>
                <li><a href='#'>ትምህርቶች</a></li>
                <li><a href='#'>ጊቢ ጉባኤ</a></li>
                <li><a href='#'>ሌሎች ድረ ገጾች</a></li>
                <li><a href='#'>ቋንቋ</a></li>
                <li><a href='#'>ያግኙን</a></li>
            </ul>
        </nav>
        <button>
            <FaSearch className='text-blue-500'/>
        </button>;
    </header>
  )
}

export default Body