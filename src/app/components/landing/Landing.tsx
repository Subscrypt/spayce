import React from 'react'
import logo from '../../../../public/img/logo.json'
import Lottie from "lottie-react";
import Image from 'next/image';

const Landing = () => {

    return (
        <div className='overflow-hidden'>
            <div>
                <div className='relative overflow-hidden p-12 flex flex-col justify-end items-start w-full h-[900px] bg-gray-50 rounded-2xl'>
                    <div className='absolute right-[-150px] top-[-150px]'>
                        <Image quality={100} width={787} height={1060} alt='imageCollection' src={'/img/landing/collection.png'} />
                    </div>
                    <div className='w-16 h-16 -translate-x-3 mb-4'><Lottie animationData={logo} loop={false} /></div>
                    <div className='text-6xl font-extrabold text-gray-900'>
                        Pay Together <br /> Securely <br />
                        With <span className='text-green-500'>Spayces</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Landing