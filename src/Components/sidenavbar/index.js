import { useState } from "react"
import { NavData } from "../../data/data.config"
import { Link } from "react-router-dom"

const Mobnav=()=>{
    return(
        <>
        
        <nav className=" w-[100%]">
             <ul className="flex flex-col justify-center items-center ">
            {NavData.map(item=><li className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" key={item.id}><Link to={item.link}>{item.tab}</Link></li>)}
        </ul>
            
        </nav>
        </>
        

    )
    
}

export const Sidenavbar = () => {
    const [open,setOpen]=useState(false)
  return (
    <>
    <div className="flex justify-end items-end sm:hidden " onClick={() => setOpen((prev) => !prev)}>
        <div className=" flex flex-row justify-between items-center bg-[#242831]  border-none p-[10px] w-[100%] text-[white]">
        
        
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          )}
         
        </div>
      </div>
      <div className='sm:hidden'>
        {open?<Mobnav/>:""}
    </div>
    </>
    
  )
}

