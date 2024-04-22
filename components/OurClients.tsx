"use client"
import React from 'react'
import { clients } from '@/constants'
import Image from 'next/image'

const OurClients = () => {
  return (
    <section className="flex flex-col items-center w-screen my-[40px] h-[190px] px-[144px] gap-[16px]">
        <div className='flex flex-col text-center'>
        <h1 className="font-semibold text-[36px] leading-[44px] text-textColor-D_gray">Our Clients</h1>
        <p className="text-textColor-1 text-[24px]">We have been working with some Fortune 500+ clients</p>
        </div>
        <div className="flex justify-between w-full">
            {
                clients.map(image=>{
                    return (
                        <Image src={image.img} alt="image" width={48} height={48}/>
                    )
                })
            }
        </div>
    </section>
  )
}

export default OurClients