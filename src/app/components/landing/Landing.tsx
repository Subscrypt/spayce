import React from 'react'
import logo from '../../../../public/img/logo.json'
import Lottie from "lottie-react";
import Image from 'next/image';
import { useAccountAbstraction } from "../../store/safe/accountAbstractionContext";

const Landing = () => {
    const { loginWeb3Auth } = useAccountAbstraction()

    return (
        <div className='overflow-scroll rounded-2xl'>
            <div id='about'>
                <div className='border-2 border-gray-100 relative overflow-hidden md:p-12 p-4 flex flex-col justify-between items-start w-full h-[800px] bg-gray-50 rounded-2xl'>
                    <div className='flex flex-row gap-2 font-semibold md:text-sm text-xs uppercase items-center text-gray-600'>made proudly using <img className='w-6 h-6' src='/img/landing/safe.png' /> and <img className='w-6 h-6' src='/img/landing/base.png' /> during Superhack</div>
                    <div>
                        <div className='absolute xl:right-[-150px] right-[-450px] hidden lg:block top-[-200px]'>
                            <Image quality={100} width={787} height={1060} alt='imageCollection' src={'/img/landing/collection.png'} />
                        </div>
                        <div className='w-16 h-16 -translate-x-3 mb-4'><Lottie animationData={logo} loop={false} /></div>
                        <div className='text-6xl font-extrabold text-gray-900'>
                            Pay Together <br /> Securely <br />
                            With <span className='text-green-500'>Spayce</span>
                        </div>
                        <button className="py-4 px-6 rounded-xl font-bold transition-colors bg-green-400 hover:bg-green-500 active:bg-green-600 mt-8" onClick={loginWeb3Auth}>Log In to Run App</button>
                    </div>
                </div>
                <div id='howitworks' className='flex flex-col gap-6 md:px-12 px-2 py-20 md:w-2/3 w-full text-5xl font-bold text-gray-900 leading-none'>
                    <span>Everybody loves <span className='text-red-500'>Netflix</span></span>
                    <div className='w-full text-2xl font-medium text-gray-900 leading-normal'>But with its price, it just doesn&apos;t feel like a good value. So you plan to share a Premium Plan for $12.99 for 5 people, but your friend Jake is not a reliable person to pay his share, and you don&apos;t have the rest 3 to share your lovely streaming service.<br /> And also, <span className='font-bold'>you don&apos;t want to pay with your card all by yourself</span></div>
                </div>

                <div className='rounded-2xl bg-green-500 text-gray-900 flex flex-col md:p-12 py-12 p-4 w-full  gap-12 text-5xl font-bold text-gray-900 leading-none'>
                    <span><span className='text-white'>Spayce</span> got you covered</span>
                    <div className='flex md:flex-row flex-col gap-6'>
                        <div className='md:w-1/4 w-full flex flex-col gap-2'>
                            <div className='text-3xl text-white'>We help you gather the crew</div>
                            <div className='text-xl font-semibold'>Users may join your subscription to help you reduce the price.</div>
                        </div>
                        <div className='md:w-1/4 w-full flex flex-col gap-2'>
                            <div className='text-3xl text-white'>We decentralize payments</div>
                            <div className='text-xl font-semibold'>We collect all payments into a multisig contract, where everyone is equally an owner.</div>
                        </div>
                        <div className='md:w-1/4 w-full flex flex-col gap-2'>
                            <div className='text-3xl text-white'>We organize the payment</div>
                            <div className='text-xl font-semibold'>Now you don&apos;t have to rely on that one person with a credit card, or worse, be one. </div>
                        </div>
                        <div className='md:w-1/4 w-full flex flex-col gap-2'>
                            <div className='text-3xl text-white'>You watch Netlix with 80% discount</div>
                            <div className='text-xl font-semibold'>Finally!</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-12 md:px-12 px-2 py-20 items-center text-5xl font-bold text-gray-900 leading-none'>
                    <img className='w-[365x] h-[389px] hidden md:block' src='/img/landing/wallets.png' />
                    <div className='flex flex-col gap-6'>
                        <span>Multisignature Wallets</span>
                        <div className='w-full text-2xl font-medium text-gray-900 leading-normal'>With our multisig wallets, funds are safeguarded by requiring multiple signatories to authorize a transaction. Perfect for group subscriptions and shared expenses.
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-12 md:px-12 px-2 py-20 items-center text-5xl font-bold text-gray-900 leading-none'>
                    <div className='flex flex-col gap-6'>
                        <span>Accout Abstractions</span>
                        <div className='w-full text-2xl font-medium text-gray-900 leading-normal'>Simplifying complexities, one transaction at a time, making possible to perform recurrent payments
                            Our system abstracts the intricacies of shared payments, allowing for a smoother, hassle-free experience while ensuring transparency and trust amongst users.
                        </div>
                    </div>
                    <img className='w-[365x] h-[389px] hidden md:block' src='/img/landing/abstractions.png' />
                </div>
                <div className='bg-green-500 flex flex-col gap-6 md:px-12 rounded-2xl px-2 py-20 w-full text-5xl font-bold text-gray-900 leading-none'>
                    <span className='text-white'>Intuitive and seamless.</span>
                    <div className='w-full text-2xl font-medium text-gray-900 leading-normal'>Dive into the future without the learning curve.
<<<<<<< HEAD
                        With Spayce, we&apos;ve transformed the Web3 experience to be as simple as any everyday app. Web3 has never been this accessible.
=======
                        With Spayce, we&#39;ve transformed the Web3 experience to be as simple as any everyday app. Web3 has never been this accessible.
>>>>>>> 1635d60242b4228f1476207de67f401eb2e5c9e8
                    </div>
                </div>
                <div className='flex flex-row gap-12 md:px-12 px-2 py-20 items-center text-5xl font-bold text-gray-900 leading-none'>
                    <div className='flex flex-col gap-6 md:w-2/3 w-full'>
                        <span>Based on <span className='text-blue-500'>Base.</span> <br /> Safed by <span className='text-green-500'>Safe</span></span>
                        <div className='w-full text-2xl font-medium text-gray-900 leading-normal'>Battle-Tested Partnerships in the Web3 Domain.
                            Rely on the robust foundations of Base, an industry giant in the crypto realm, coupled with the unparalleled security of Safe. Together, they form a fortress of trust and reliability, ensuring your shared finances are in expert hands. </div>
                    </div>
                </div>
                <div className='rounded-2xl sm:mb-0 mb-20 md:text-4xl text-3xl bg-green-500 text-gray-900 flex flex-row justify-between items-center gap-12 md:px-12 px-4 md:py-6 py-4 w-full font-bold text-gray-900 leading-none'>
                    <span>Save $. Join <span className='text-white'>Spayce</span></span>
                    <button className="text-white py-4 md:px-6 px-2 text-xl rounded-xl font-bold transition-colors border-2 border-white bg-green-500 hover:bg-gray-100 hover:text-green-500 active:bg-white" onClick={loginWeb3Auth}>Log In to Run App</button>
                </div>

            </div>
        </div>
    )
}

export default Landing