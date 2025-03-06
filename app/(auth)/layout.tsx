import Image from 'next/image'
import React from 'react'

const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='flex min-h-screen'>
        <section className='bg-brand p-10 hidden w-1/2 items-center justify-center lg:flex xl:2/5'>
            <div className='flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12'>
                <Image alt='logo' width={224} height={82} className='h-auto' src="/assets/icons/logo-full.svg"/>
                <div className='space-y-5 text-white '>
                    <h1 className='h1'>Manage your files the best way</h1>
                    <p className='body-1'>This is a place where you can store all your document</p>
                </div>
                <Image alt='files ' width={342} height={342} className='transition-all hover:rotate-2 hover:scale-105' src="/assets/images/files.png"/>
            </div>
        </section>

        <section className='flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0'>
            <div className='mb-16 lg:hidden'>
                <Image src="/assets/icons/logo-full-brand.svg" width={224} height={82} alt='logo-full' className='h-auto w-[200px] lg:w-[250px]' />
            </div>
                {children} 
        </section>
    </div>
  )
}

export default layout
