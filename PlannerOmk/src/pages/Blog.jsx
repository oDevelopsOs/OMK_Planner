import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from '../assets/Logo.png';
import BlogPost from "../JSON/blogPost";
import { Link } from "react-router-dom";
import Assitant from "../components/Assitant";

export default function Blog() {
  return (
    <>
      <Header/>
      <div className="w-9/12 text-left mx-auto">
        <div className="text-left my-16 w-full">
          <h1 className="text-6xl font-bold mb-5">Stories we tell</h1>
          <p className="text-lg text-gray-500">Stay up to date on the latest from OMK Planner</p>
        </div>
        <div className="flex flex-col mb-16">

          {BlogPost.map((item, index) => (
            <React.Fragment key={index}>
              <Link className="hover:underline" to={item.url}>
                <h3 className="text-2xl font-semibold mb-2 ">{item.title}</h3>
              </Link>
              <p className="text-md text-gray-500 text-lg mb-6">{item.description} <Link className=" hover:text-blue-500 text-xl" to={item.url}>➔</Link> </p>
              <div className="mb-10">
                <img src={Logo} alt="Logo img" className="h-8 rounded-full inline mr-1" />
                <p className="inline"><span className=" text-gray-700 font-medium text-sm">{item.author}</span></p> <p className=" text-sm text-gray-500 inline"> - {item.date}</p>
                <div className="h-[0.1px] w-full bg-gray-200 mt-4"></div>
              </div>
            </React.Fragment>
          ))}
          
        </div>
      </div>
      <Assitant/>
      <Footer/>
    </>
  );
}
