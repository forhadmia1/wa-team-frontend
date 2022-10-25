import React from 'react';
import { BsCheck2All } from 'react-icons/bs'

const ChatBox = () => {
    return (
        <div className='h-full w-full p-5 overflow-y-scroll'>
            <div className='flex justify-start  mt-2'>
                <div className='bg-base-100 rounded  shadow px-3 py-2 relative'>
                    <p className='text-lg pr-20'>hello</p>
                    <div className=' absolute right-1 bottom-1 '>
                        <span className='text-right text-[12px]'>10.00 Pm</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-end  mt-2'>
                <div className='bg-message  rounded shadow px-3 py-2 relative'>
                    <p className='text-lg pr-20'>hello</p>
                    <div className=' absolute right-1 bottom-1 flex gap-1 items-center'>
                        <span className='text-right text-[12px]'>10.00 Pm</span>
                        <span className='text-secondary'><BsCheck2All /></span>
                    </div>
                </div>
            </div>
            <div className='flex justify-start mt-2'>
                <div className='bg-base-100 rounded  shadow px-3 py-2 relative'>
                    <p className='text-lg pr-20'>How are you?</p>
                    <div className=' absolute right-1 bottom-1 '>
                        <span className='text-right text-[12px]'>10.00 Pm</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-end  mt-2'>
                <div className='bg-message  rounded shadow px-3 py-2 relative'>
                    <p className='text-lg pr-20'>fine</p>
                    <div className=' absolute right-1 bottom-1 flex gap-1 items-center'>
                        <span className='text-right text-[12px]'>10.00 Pm</span>
                        <span className='text-secondary'><BsCheck2All /></span>
                    </div>
                </div>
            </div>
            <div className='flex justify-start mt-2'>
                <div className='bg-base-100 rounded  shadow px-3 py-2 relative'>
                    <p className='text-lg pr-20'>What are you doing?</p>
                    <div className=' absolute right-1 bottom-1 '>
                        <span className='text-right text-[12px]'>10.00 Pm</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-end  mt-2'>
                <div className='bg-message  rounded shadow px-3 py-2 relative'>
                    <p className='text-lg pr-20'>I am watching movies. You?</p>
                    <div className=' absolute right-1 bottom-1 flex gap-1 items-center'>
                        <span className='text-right text-[12px]'>10.00 Pm</span>
                        <span className='text-secondary'><BsCheck2All /></span>
                    </div>
                </div>
            </div>
            <div className='flex justify-start mt-2'>
                <div className='bg-base-100 rounded  shadow px-3 py-2 relative'>
                    <p className='text-lg pr-20'>I am reading.</p>
                    <div className=' absolute right-1 bottom-1 '>
                        <span className='text-right text-[12px]'>10.00 Pm</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-end  mt-2'>
                <div className='bg-message  rounded shadow px-3 py-2 relative'>
                    <p className='text-lg pr-20'>will you going to a tour with us?</p>
                    <div className=' absolute right-1 bottom-1 flex gap-1 items-center'>
                        <span className='text-right text-[12px]'>10.00 Pm</span>
                        <span className='text-secondary'><BsCheck2All /></span>
                    </div>
                </div>
            </div>
            <div className='flex justify-start mt-2'>
                <div className='bg-base-100 rounded  shadow px-3 py-2 relative'>
                    <p className='text-lg pr-20'>Where are you going?</p>
                    <div className=' absolute right-1 bottom-1 '>
                        <span className='text-right text-[12px]'>10.00 Pm</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-end  mt-2'>
                <div className='bg-message  rounded shadow px-3 py-2 relative'>
                    <p className='text-lg pr-20'>We are going to Cox'sBazar.</p>
                    <div className=' absolute right-1 bottom-1 flex gap-1 items-center'>
                        <span className='text-right text-[12px]'>10.00 Pm</span>
                        <span className='text-secondary'><BsCheck2All /></span>
                    </div>
                </div>
            </div>
            <div className='flex justify-start mt-2'>
                <div className='bg-base-100 rounded  shadow px-3 py-2 relative'>
                    <p className='text-lg pr-20'>Okay, I will go with you.</p>
                    <div className=' absolute right-1 bottom-1 '>
                        <span className='text-right text-[12px]'>10.00 Pm</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-end  mt-2'>
                <div className='bg-message  rounded shadow px-3 py-2 relative'>
                    <p className='text-lg pr-20'>oh, realy, Thanks.</p>
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