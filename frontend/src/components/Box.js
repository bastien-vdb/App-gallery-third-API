import React from 'react';
import { deleteLogo, editElement } from './svgElements';

function Box(props) {
    return (
        <div id='bloc' className='h-80 w-80 shadow shadow-2xl rounded-xl hover:scale-110 ease-in-out duration-500 cursor-pointer'>
            <img className='h-fit' src='df936ec03931a0e5b6b7b746.jpg' alt='image' />
            <button className='float-right right-2 top-2 mr-2 relative hover:scale-125 hover:text-red-500 duration-200 ease-in'>
                {deleteLogo}
            </button>
            <button className='float-right right-2 top-2 mr-2 relative hover:scale-125 hover:text-sky-500 duration-200 ease-in'>
                {editElement}
            </button>
            <p className='h-full w-full text-center mt-4 font-bold text-sky-500'>
                Hallo
            </p>
        </div>
    );
}

export default Box;