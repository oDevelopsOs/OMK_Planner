import { Suspense, lazy, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Lines from '../../public/treeLines.svg';
import img1 from '../assets/ElevateProductivity/image1.jpg';
import img2 from '../assets/ElevateProductivity/image2.jpg';

const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));
const Assitant = lazy(() => import("../components/Assitant"));

export default function ElevateProductivity() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
            </Suspense>
            <div className="w-9/12 mx-auto flex flex-col ">
                <div className="mx-auto text-6xl w-4/6 text-center font-extrabold my-20">
                    <h1>
                        Elevate Your Productivity with OMK Planner
                    </h1>
                </div>
                <div className="flex flex-row">
                    <div className="w-1/5 hidden lg:block">
                        <nav className="sticky top-28 h-auto">
                            <h2 className="font-bold text-xl mb-4">Table of contents</h2>
                            <ul>
                                <li className="mb-1">
                                    <Link className="text-lg text-slate-700 hover:text-black hover:underline" to={'/blog/elevate-your-productivity-with-omkplanner#discover'}>
                                        <img src={Lines} alt="" className="h-6 opacity-50 -rotate-45 inline mr-1 hover:opacity-100" /> Discovering OMK : A Simple Solution
                                    </Link>
                                </li>
                                <li className="mb-1">
                                    <Link className="text-lg text-slate-700 hover:text-black hover:underline" to={'/blog/elevate-your-productivity-with-omkplanner#productivity'}>
                                        <img src={Lines} alt="" className="h-6 opacity-50 -rotate-45 inline mr-1 hover:opacity-100" />OMK : A Fresh Take on Productivity
                                    </Link>
                                </li>
                                <li className="mb-1">
                                    <Link className="text-lg text-slate-700 hover:text-black hover:underline" to={'/blog/elevate-your-productivity-with-omkplanner#omk-great'}>
                                        <img src={Lines} alt="" className="h-6 opacity-50 -rotate-45 inline mr-1 hover:opacity-100" />What Makes OMK Great?
                                    </Link>
                                </li>
                                <li className="mb-1">
                                    <Link className="text-lg text-slate-700 hover:text-black hover:underline" to={'/blog/elevate-your-productivity-with-omkplanner#more'}>
                                        <img src={Lines} alt="" className="h-6 opacity-50 -rotate-45 inline mr-1 hover:opacity-100" />More to Explore with OMK
                                    </Link>
                                </li>
                                <li className="mb-1">
                                    <Link className="text-lg text-slate-700 hover:text-black hover:underline" to={'/blog/elevate-your-productivity-with-omkplanner#wrapping'}>
                                        <img src={Lines} alt="" className="h-6 opacity-50 -rotate-45 inline mr-1 hover:opacity-100" />Wrapping Up
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="w-3/5 ml-20">
                        <div><img src={Logo} alt="" className="h-8 inline" /> <span className="text-slate-700 text-sm font-medium">By Omk</span> <p className="inline text-slate-500 text-sm">- September 22, 2020</p> </div>
                        <div className="h-[0.1px] w-16 bg-slate-300 mt-6"></div>
                        <section>
                            <div id="discover">
                                <h2 className="text-3xl font-semibold my-10">Discovering OMK: A Simple Solution</h2>
                                <p className="text-lg text-gray-500 mb-10">With so many productivity tools out there, finding the right one can be tough. That's where OMK comes in, a tool that just makes sense.</p>
                                <div className="py-5 px-8 bg-gray-200 border-gray-300 border rounded-xl mb-24">
                                    <p className="text-lg text-slate-800"><span className="text-black">Why OMK?</span> OMK gets right to the point. It's easy to use and helps you focus on getting things done without the fuss.</p>
                                </div>
                            </div>
                            <div className="my-10 mb-24" id="productivity">
                                <h2 className="text-3xl font-semibold my-10">OMK: A Fresh Take on Productivity</h2>
                                <p className="text-lg text-gray-500 mb-10">I've tried a lot of tools over the years. Some were too complicated, and others just didn't have what I needed. OMK is different. It's clear, to the point, and has everything I want without the extras I don't need.</p>
                                <img src={img1} alt="" className="rounded-lg" />
                            </div>
                            <div id="omk-great">
                                <h2 className="text-3xl font-semibold my-10">What Makes OMK Great?</h2>
                                <p className="text-lg text-gray-600 my-8">
                                    1. <span className="text-black">Straightforward Design:</span> OMK is like a digital board for your notes and tasks. It's simple and does the job well.
                                </p>
                                <p className="text-lg text-gray-600 my-8">
                                    2. <span className="text-black">Easy Sharing:</span> Got a list or note you want to share? With OMK, it's just a click away. No complications.
                                </p>
                                <p className="text-lg text-gray-600 my-8">
                                    3. <span className="text-black">Fits Everyone:</span> Whether you're studying, working, or just organizing your thoughts, OMK's got you covered.
                                </p>
                                <p className="text-lg text-gray-600 my-8">
                                    4. <span className="text-black">Safe and Secure:</span> In a world where online safety matters, OMK ensures your stuff stays private.
                                </p>
                                <img src={img2} alt="" className="rounded-lg" />
                            </div>
                            <div id="more">
                                <h2 className="text-3xl font-semibold my-10 mt-20">More to Explore with OMK</h2>
                                <p className="text-lg text-gray-500 mb-10">OMK's not just the basics. As you use it more, you'll find handy tools and options that make things even easier.</p>
                                <div className="py-5 px-8 bg-gray-200 border-gray-300 border rounded-xl mb-24">
                                    <p className="text-lg text-slate-800">Get the Most Out of OMK The more you use OMK, the more you'll find ways to make it work best for you. It's flexible and ready to adapt to your needs.</p>
                                </div>
                            </div>
                            <div className="mb-36" id="wrapping">
                                <h2 className="text-3xl font-semibold my-10">Wrapping Up</h2>
                                <p className="text-lg text-gray-500 mb-10">Nimboard is all about making your life easier. It's a tool that's easy to pick up, and it genuinely helps you get things done. If you're looking for a no-nonsense approach to productivity, give Nimboard a try.</p>
                                <div className="h-[0.1px] w-full bg-gray-300 mb-8"></div>
                                <Link className="text-blue-600 font-medium hover:underline" to={'/blog'}> 🠨 Back to the blog</Link>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Assitant />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Footer />
            </Suspense>
        </>
    );
}
