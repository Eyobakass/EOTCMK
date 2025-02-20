import { useState } from 'react'
function Footer() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[#333333] flex justify-between p-[0.5rem] pl-[7%] pr-[7%] ">
      <section className="flex pt-[0.5rem] ">
        <p className="text-white text-[0.8rem] mr-[0.5rem]">
          © Mahibere Kidusan - All Rights Reserved.
        </p>
        <p className="text-gray-400 text-[0.8rem]">Website by MK-IT</p>
      </section>
      <button className="hover:bg-[#365799] rounded-full text-white w-8 h-8 duration-500 ease-out ">
        f
      </button>
    </div>
  );
}

export default Footer