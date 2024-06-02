import Carrussel from "./Carrussel";

export default function CentralComponent() {



  return (
    <div>
        <div className=" h-24 w-[2px] bg-gray-300 mx-auto my-20"></div>
        <div className="w-full text-center mb-10">
            <h1 className="mb-10 text-6xl font-bold">Experience hassle-free productivity</h1>
            <p className=" text-xl text-slate-600">
            Discover a refreshingly simple and minimalist approach to organization. <br />
            Unlike traditional, complex productivity tools, OMK Planner features let you to manage any aspect of your life without the usual clutter.
            </p>
        </div>
        <div className="hidden lg:block">
            <Carrussel/>
        </div>
        <div className=" h-[2px] w-[40rem] bg-gray-300 mx-auto my-24"></div>
    </div>
  )
}
