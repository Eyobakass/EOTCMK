import { useState } from 'react'
function Body() {
  const [count, setCount] = useState(0)

  return (
      <div className='text-3xl  underline text-secondary '>Body</div>
  )
}

export default Body