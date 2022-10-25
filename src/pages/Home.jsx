import React from 'react';
import { BiPlus } from 'react-icons/bi'
import { CiSettings } from 'react-icons/ci'
import { BsCameraVideo } from 'react-icons/bs'
import { IoCallOutline } from 'react-icons/io5'
import { VscSearch } from 'react-icons/vsc'
import { GrEmoji } from 'react-icons/gr'
import { MdAttachFile } from 'react-icons/md'
import { AiOutlineSend } from 'react-icons/ai'
import ChatList from '../components/ChatList';
import ChatBox from '../components/ChatBox';

const Home = () => {
    return (
        <div className='flex h-screen'>
            <div className='basis-2/5 border-r border-accent'>
                <div className='p-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-2xl font-bold'>Chats</h1>
                        <div className='flex justify-between gap-10 text-xl'>
                            <BiPlus />
                            <CiSettings />
                        </div>
                    </div>
                    <div class="relative text-gray-600 w-full border-2 mt-5 border-accent">
                        <input type="text" name="serch" placeholder="Search" class="bg-white w-full h-10 px-5 pr-10 text-sm focus:outline-none" />
                        <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                            <VscSearch />
                        </button>
                    </div>
                </div>
                {/* All people are here */}
                <ChatList />
            </div>
            <div className='w-full relative'>
                <div className='px-5 flex justify-between items-center bg-base-100'>
                    <div>
                        <h2 className='text-2xl font-bold'>Alice</h2>
                        <p className='text-md font-light'>Online</p>
                    </div>
                    <div className='flex items-center text-xl'>
                        <BsCameraVideo />
                        <IoCallOutline className='ml-5' />
                        <div className='bg-accent h-6 w-[1px] ml-5'></div>
                        <VscSearch className='ml-5' />
                        <div className='w-8 h-8 rounded-full bg-primary ml-5'>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[calc(100vh-113px)] '>
                    <ChatBox />
                </div>
                <div className='border-t border-accent w-full h-14 absolute bottom-0 left-0 px-5 flex items-center bg-base-100'>
                    <div className='flex items-center w-full'>
                        <div className='flex gap-5 text-2xl'>
                            <GrEmoji />
                            <MdAttachFile />
                        </div>
                        <div class="relative text-gray-600 w-full h-full">
                            <input type="text" name="serch" placeholder="Search" class="bg-white w-full h-10 px-5 pr-10 text-sm focus:outline-none" />
                            <button type="submit" class="absolute right-0 top-0 mt-3 text-2xl">
                                <AiOutlineSend />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;