import React from 'react';
import { BsCheck2All } from 'react-icons/bs'

const ChatBox = () => {
    return (
        <div className='h-full w-full p-5'>
            <div className='flex justify-start'>
                <div className='bg-base-100 rounded  shadow px-3 py-2 relative'>
                    <p className='text-xl pr-20'>hello</p>
                    <div className=' absolute right-1 bottom-1 '>
                        <span className='text-right text-[12px]'>10.00 Pm</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-end '>
                <div className='bg-message  rounded shadow px-3 py-2 relative'>
                    <p className='text-xl pr-20'>hello</p>
                    <div className=' absolute right-1 bottom-1 flex gap-1 items-center'>
                        <span className='text-right text-[12px]'>10.00 Pm</span>
                        <span className='text-secondary'><BsCheck2All /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;