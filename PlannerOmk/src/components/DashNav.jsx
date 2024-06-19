import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


export default function DashNav() {
  const show = useSelector((state)=>state.toggle.value)
  return (
        <div className={show?"h-5/6 w-44 bg-white bg-opacity-80 absolute top-12 rounded-r-lg text-left": "hidden"}>

          <h2 className=" font-bold text-xl ml-4 mt-4">Your dash board</h2>
                <ul className="py-7">
                  <li className=" first-letter:uppercase font-medium my-2 ml-3 hover:bg-slate-400 hover:shadow-md hover:rounded-sm hover:resize hover:text-lg"><Link>Helo</Link> <button className="ml-24">🗑️</button></li>                  
                  <li className=" first-letter:uppercase font-medium my-2 ml-3 hover:bg-slate-400 hover:shadow-md hover:rounded-sm hover:resize hover:text-lg"><Link>Helo</Link> <button className="ml-24">🗑️</button></li>                  
                  <li className=" first-letter:uppercase font-medium my-2 ml-3 hover:bg-slate-400 hover:shadow-md hover:rounded-sm hover:resize hover:text-lg"><Link>Helo</Link> <button className="ml-24">🗑️</button></li>                  
                  <li className=" first-letter:uppercase font-medium my-2 ml-3 hover:bg-slate-400 hover:shadow-md hover:rounded-sm hover:resize hover:text-lg"><Link>Helo</Link> <button className="ml-24">🗑️</button></li>                  
                </ul>
        </div>
  )
}
