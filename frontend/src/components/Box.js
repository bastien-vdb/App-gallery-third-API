import React, { useEffect } from 'react';
import { deleteLogo, editElement } from './svgElements';

function Box({ url, id, frencher}) {

    const handleDelete = async () => {
        fetch(`http://localhost:3002/delete/${id}`)
        .then(res=>frencher(true))
        .catch(err=>console.log(err.message))
    }

    return (
        <div id='bloc' className='h-fit pb-4 w-80 shadow shadow-2xl rounded-xl ease-in-out duration-500 cursor-pointer'>
            <img className='h-80 object-cover rounded-t-xl' src={url} alt='image' />
            <button className='float-right right-2 top-2 mr-2 relative hover:scale-125 hover:text-red-500 duration-200 ease-in' onClick={()=>handleDelete()}>
                {deleteLogo}
            </button>
            <p className='h-full w-full text-center mt-4 font-bold text-sky-500'>
                {id}
            </p>
        </div>
    );
}

export default Box;