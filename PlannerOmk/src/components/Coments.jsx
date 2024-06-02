import opinions from '../JSON/opinions.js'
import ReactStars from "react-rating-stars-component";

export default function Coments() {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center my-20'>
        {opinions.map(user =>{
            return (
                <div key={user.name} className='flex flex-col justify-center items-center m-5 w-[24rem]'>
                    <img src={user.image} alt="Helo user" className='h-24 w-24 rounded-full text-center mb-3' />
                    <div className='text-center mb-3'>
                        <ReactStars 
                            count={user.random_number}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            edit={false}
                            color={"#ffd700"}
                        />
                    </div>
                    <p className='text-lg text-center mb-3 text-gray-600'>{`"${user.testimonial}"`}</p>
                    <div className="text-center">
                        <h4 className=' font-medium'>{user.name}</h4>
                        <p className=' text-gray-600 font-mono text-xs'>{user.profession}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
