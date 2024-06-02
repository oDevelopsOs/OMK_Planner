import React, { useState } from 'react';
import question from '../JSON/questions.js';
import plus from '../../public/plus.svg';
import minus from '../../public/minus.svg';

export default function Question() {
    const [visibility, setVisibility] = useState(new Array(question.length).fill(false));

    const handleClick = (index) => {
        const newVisibility = [...visibility];
        newVisibility[index] = !newVisibility[index];
        setVisibility(newVisibility);
    };

    return (
        <div>
            <div className='w-full text-left flex flex-col mx-auto items-center mb-48'>
                <div className='w-full text-center mb-20'>
                    <h1 className='text-6xl font-bold'>Frequently asked questions</h1>
                </div>
                {question.map((item, index) => (
                    <React.Fragment key={index} >
                        <div className='h-[0.1px] w-3/6 text-left bg-gray-300'></div>
                        <div className='my-4 text-left w-3/5'>
                            <div className='flex items-start justify-start'>
                                <button onClick={() => handleClick(index)}>
                                    {visibility[index] ? <img src={minus} alt="" className='h-6 mx-9 inline'/> : <img src={plus} alt="" className='h-6 mx-9 inline'/>}
                                </button>
                                <p className='font-medium text-xl'>{item.question}</p>
                            </div>
                            {visibility[index] && (
                                <div className='w-3/5 h-auto my-2 ml-24 block'>
                                    <p className=' text-gray-600'>{item.answer}</p>
                                </div>
                            )}
                        </div>
                        <div className='h-[0.1px] w-3/6 bg-gray-300'></div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
