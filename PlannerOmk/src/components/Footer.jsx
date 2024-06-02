import { Link } from "react-router-dom";
import Logo from "../assets/MyLogo.png"
import Twitter from "../../public/Twitter.svg"
import Gmail from "../../public/gmail.png"

export default function Footer() {
  return (
    <div className="felx flex-col md:justify-center md:items-center h-[11em] w-3/5 mx-auto md:w-[75em]" >
      <div className="w-full h-[0.1px] bg-slate-300 my-6"></div>
      <div className=" justify-center text-center flex flex-col items-center">
        <img src={Logo} alt="Logo" className=" w-28 my-0"/>
        <div>
          <Link to={'/terms-of-service'} className=" text-blue-500 font-medium ">Terms of Service</Link> - <Link to={'/privacy-policy'} className=" text-blue-500 font-medium "> Privacy Policy</Link>
        </div>
      </div>
      <div className="w-full flex justify-between mt-6">
      <div>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img className="h-6 inline mx-1" src={Twitter} alt="Twitter" />
        </a>
        <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
          <img className="h-6 inline mx-1" src={Gmail} alt="Gmail" />
        </a>
      </div>
        <div>
          <p className=" text-gray-500 text-sm">© 2024 OMK Planner. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
