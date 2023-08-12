import React from 'react';
import Billing from '../components/billings/Billing'

export default function Home() {
  return (
    <main className="w-full h-full bg-white flex flex-col gap-6">
      <div className="flex flex-row w-full pt-3 px-3 justify-between items-center">
        <h2 className="font-bold text-3xl">Billings</h2>
      </div>
      <div className='flex flex-col gap-2 bg-gray-50 rounded-2xl pt-2 overflow-hidden'>
        <div className='uppercase opacity-50 font-semibold flex flex-col gap-2'>
          <div className="text-left p-px px-2 flex sm:flex-row flex-col gap-3 justify-between sm:items-center text-sm border-2 border-transparent">
            <div className="flex flex-row gap-3 items-center">
              <div className="h-6 w-6 rounded-full" />
              <div className="w-20 flex flex-col items-start">
                <span className="">Name</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="">Type</span>
              </div>
            </div>
            <div className="flex flex-row sm:w-fit items-center justify-between gap-8">
              <div className="flex flex-row gap-3">
                <div className="w-20 pr-3 flex flex-col items-start">
                  <span>Date</span>
                </div>
                <div className="w-16 flex flex-col">
                  <div className={``}>
                    <div className="w-full flex flex-row justify-start items-end">
                      <span className="pr-1">Price</span>
                      <span className="uppercase text-[10px]">CUR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-px bg-gray-100' />
        </div>
        <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
        <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
        <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
        <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
        <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
        <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
        <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
        <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
        <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
        <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
        <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
        <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
        <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
        <main className="w-full h-full bg-white flex flex-col gap-6">
          <div className="flex flex-row w-full pt-3 px-3 justify-between items-center">
            <h2 className="font-bold text-3xl">Billings</h2>
          </div>
          <div className='flex flex-col gap-2 bg-gray-50 rounded-2xl pt-2 overflow-hidden'>
            <div className='uppercase opacity-50 font-semibold flex flex-col gap-2'>
              <div className="text-left p-px px-2 flex sm:flex-row flex-col gap-3 justify-between sm:items-center text-sm border-2 border-transparent">
                <div className="flex flex-row gap-3 items-center">
                  <div className="h-6 w-6 rounded-full" />
                  <div className="w-20 flex flex-col items-start">
                    <span className="">Name</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="">Type</span>
                  </div>
                </div>
                <div className="flex flex-row sm:w-fit items-center justify-between gap-8">
                  <div className="flex flex-row gap-3">
                    <div className="w-20 pr-3 flex flex-col items-start">
                      <span>Date</span>
                    </div>
                    <div className="w-16 flex flex-col">
                      <div className={``}>
                        <div className="w-full flex flex-row justify-start items-end">
                          <span className="pr-1">Price</span>
                          <span className="uppercase text-[10px]">CUR</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full h-px bg-gray-100' />
            </div>
            <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
            <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
            <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
            <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
            <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
            <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
            <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
            <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
            <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
            <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
            <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
            <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
            <Billing name='Netflix' description='Premium Subscription' price={0.01} coin='ETH' renewalDate='01.01.2014' />
          </div>
        </main>
        );
}
