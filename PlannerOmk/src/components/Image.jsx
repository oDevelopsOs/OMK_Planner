import Img from '../assets/plannerImg.jpg'
export default function Image() {
  return (
    <div className='w-full flex justify-center my-6'>
            <img src={Img} alt="" className=' w-9/12 object-cover shadow-xl'/>
    </div>
  )
}
