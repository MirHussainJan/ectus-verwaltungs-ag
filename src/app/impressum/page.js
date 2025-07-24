import { Footer } from '@/features/common/Footer'
import { Navbar } from '@/features/common/Navbar'
import BackArrow from '@/assets/icons/backArrow'
import React from 'react'
import Link from 'next/link';

const Impressum = () => {
    return (
        <div>
            <Navbar mode="light" />
            <div className='lg:px-[8.333vw] min-h-[calc(100dvh-763px] md:min-h-[calc(100dvh-655px)] lg:min-h-[calc(100dvh-486px)] px-4 lg:pt-[42px] lg:pb-[80px] pt-[28px] pb-[48px]'>
                <Link className='flex items-center gap-2 font-bold text-[#484848] text-[20px]/[150%]' href="/">
                    <BackArrow /> Home</Link>
                <div className='flex flex-col gap-4 lg:mt-8 mt-6 w-[240px]'>
                    <h2 className='font-bold text-[32px]/[140%] lg:text-[40px]/[52px]%]'>Impressum</h2>
                    <p className='text-[18px]/[28px] text-[#626262]'>SK Black Rock Financial GmbH
                        Sandrstraße 104
                        40789 Monheim a. Rhein
                        <br /><br />

                        Geschäftsführer Mustafa Sizan
                        Hauptsitz Monheim
                        Amtsgericht Düsseldorf
                        HRB 102003
                        DER1 101.HRB102003
                        <br /><br />
                        E-Mail (info@sk-blackrock)</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Impressum