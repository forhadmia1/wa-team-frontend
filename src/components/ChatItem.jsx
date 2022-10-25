import React from 'react';

const ChatItem = () => {
    return (
        <div className='px-5 py-2 gap-2 flex items-center'>
            <div>
                <img className='w-8 h-8 rounded-full' src="https://img.freepik.com/free-photo/woman-portrait-with-blue-lights-visual-effects_23-2149419443.jpg?w=740&t=st=1666711820~exp=1666712420~hmac=3c711240de6780a9759f1dc817e863fdab43f94163d757dd178e4fcff7055476" alt="" />
            </div>
            <div className='w-full'>
                <div className='font-bold flex justify-between'>
                    <h2 className='text-lg'>Mamun</h2>
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