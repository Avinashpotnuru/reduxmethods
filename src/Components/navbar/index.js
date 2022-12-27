


import { NavData } from "../../data/data.config"
 
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <nav className="w-[100%] hidden sm:inline-block  ">
       
        <ul className="flex justify-around items-center ">
            {NavData.map(item=><li className="m-[10px]" key={item.id}><Link to={item.link}><button className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">{item.tab}</button></Link></li>)}
        </ul>
    </nav>
  )
}

export default Navbar