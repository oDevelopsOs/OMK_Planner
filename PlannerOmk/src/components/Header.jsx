import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { useSelector } from "react-redux"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isTrue = useSelector((state)=>state.auth.value)


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <div className="sticky top-0 z-20">
      <nav className="h-auto flex items-center justify-between bg-white flex-wrap p-6 bg-opacity-95 lg:px-10 mx-auto w-10/12">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to={'/'}>
            <img src={logo} alt="Planner OMK Logo" className="h-10 inline" />
            <span className="font-bold text-xl text-black tracking-tight">Planner OMK</span>
          </Link>
        </div>
        <div className="block sm:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-slate-900 border-white hover:text-gray-700 hover:border-white" onClick={toggleMenu}>
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} sm:flex sm:items-center sm:w-auto w-full sm:justify-between`}>
          <div className="sm:flex sm:items-center text-center sm:justify-between w-full sm:w-auto text-sm">
            {isTrue ? 
             <>
             <Link to={'/blog'} className="block mt-4 sm:mt-0 sm:inline-block max-sm:text-2xl max-lg:text-xl font-semibold text-black hover:text-blue-400 mx-6">
                   Blog
             </Link>
             <Link to={'/dash-note'} className="block mt-4 sm:mt-0 sm:inline-block max-sm:text-2xl max-lg:text-xl font-semibold text-black hover:text-blue-400 mx-6">
                         Go to dashboard
             </Link>
            </>
            :
            <>
            <Link to={'/blog'} className="block mt-4 sm:mt-0 sm:inline-block max-sm:text-2xl max-lg:text-xl font-semibold text-black hover:text-blue-400 mx-6">
                      Blog
            </Link>
            <Link to={'/singin'} className="block mt-4 sm:mt-0 sm:inline-block max-sm:text-2xl max-lg:text-xl font-semibold text-black hover:text-blue-400 mx-6">
                          Sign in
            </Link>
            <Link to={'/singup'} className="block sm:inline-block px-4 py-2 max-sm:text-2xl max-lg:text-xl font-semibold leading-none border rounded-xl text-white border-black bg-black hover:border-transparent hover:text-blue-400 hover:bg-slate-700 mt-4 ml-2 sm:mt-0">
                          Sign up ➔
            </Link>
        </>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}
