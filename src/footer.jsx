import { useState } from 'react'
function Footer() {
  const [count, setCount] = useState(0)

  return (
      <div className='text-3xl  underline text-secondary '>Footer</div>
  )
}

export default Footer