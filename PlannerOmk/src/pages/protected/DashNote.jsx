import { Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";

import Plus from "../../../public/plus-thin.svg"
import GetBack from "../../../public/getBack.svg"
const DashHeader = lazy(() => import("../../components/DashHeader"));
const Assitant = lazy(() => import("../../components/Assitant"));
const DashNav = lazy(() => import("../../components/DashNav"));
const Profile = lazy(() => import("../../components/Profile"));

export default function DashNote() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/create-note');
    }

    return (
        <>
            <div className="text-center">
                <Suspense fallback={<div>Loading...</div>}>
                    <DashHeader />
                </Suspense>
                <div className="mt-24">
                    <div className="mb-8">
                        <h2 className="font-bold text-2xl">👋Good Morning, {'ossama mk!'}</h2>
                        <p className="text-gray-500 text-sm">Organize early, succeed all day.</p>
                    </div>

                    <div className="w-full">
                        <div 
                            className="h-20 w-[28rem] rounded-lg bg-gray-100 mx-auto content-center text-left hover:shadow-lg mb-4 hover:cursor-pointer" 
                            onClick={handleClick}>
                            <Suspense fallback={<div>Loading...</div>}>
                                <img 
                                    src={Plus} 
                                    alt="" 
                                    className="h-6 w-6 inline ml-2" 
                                    style={{ filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(75%) contrast(90%)' }} 
                                />
                            </Suspense>
                            <p className="text-gray-500 font-medium inline px-2">Create a new board</p>
                        </div>
                        <div 
                            className="h-20 w-[28rem] rounded-lg bg-gray-100 mx-auto content-center text-left hover:shadow-lg mb-4 hover:cursor-pointer" 
                            onClick={''}>
                            <Suspense fallback={<div>Loading...</div>}>
                                <img 
                                    src={GetBack} 
                                    alt="" 
                                    className="h-6 w-6 inline ml-2" 
                                    style={{ filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(75%) contrast(90%)' }} 
                                />
                            </Suspense>
                            <p className="text-gray-500 font-medium inline px-2">Continue where you left off</p>
                        </div>
                    </div>
                    <div className="h-fit w-fit">
                        <Suspense fallback={<div>Loading...</div>}>
                            <DashNav />
                        </Suspense>
                    </div>
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Profile />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Assitant />
                </Suspense>
            </div>
        </>
    );
}
