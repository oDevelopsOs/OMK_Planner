import MyLogo from '../assets/MyLogo.png'
import Hamburguer from '../../public/treeLines.svg'
import { useDispatch } from 'react-redux'
import { toggle , toogle2 } from '../store/app/noteSlice.js'

export default function DashHeader() {
  const dispatch = useDispatch();

  return (
    <div className="h-12 justify-center w-full px-4 content-center align-middle mb-10">
      <nav className='w-full flex justify-between h-full items-center'>
        <ul className='flex flex-row'>
          <li>
            <button className='inline hover:cursor-pointer' onClick={() =>dispatch(toggle())}>
              <img src={Hamburguer} alt="" className='h-10' />
            </button>
          </li>
          <li>
            <img src={MyLogo} alt="" className='h-12' />
          </li>
        </ul>
        <ul>
          <li className='inline hover:cursor-pointer'>
            <button
            onClick={() =>dispatch(toogle2()) }
            >
            <div className='h-10 w-10 bg-blue-500 rounded-full content-center text-center justify-center font-medium text-white'>
                          {'A'}
            </div>
            </button>
           
          </li>
        </ul>
      </nav>
      <div className="h-[0.1px] w-4/5 bg-gray-300 mx-auto"></div>
    </div>
  )
}
