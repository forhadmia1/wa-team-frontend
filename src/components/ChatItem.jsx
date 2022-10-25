import React from 'react';

const ChatItem = () => {
    return (
        <div className='px-5 py-2 gap-2 flex items-center'>
            <div className='w-10 h-10 bg-primary rounded-full'>

            </div>
            <div className='w-full'>
                <div className='font-bold flex justify-between'>
                    <h2 className='text-xl'>Mamun</h2>
                    <p className='text-secondary'>2.00 Pm</p>
                </div>
                <div className='flex justify-between'>
                    <p>Hello how are You?</p>
                    <div className='w-6 h-6 bg-secondary rounded-full relative'>
                        <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base-100 font-bold'>1</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatItem;