import React from 'react'

const Banner = () => {
  return (
    <section className='bg-ban py-[200px] lg:py-[257px] w-full bg-no-repeat bg-center bg-cover z-[1] relative after:absolute after:left-0 after:top-0 after:content-[""] after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] after:z-[-1]'>
        <div className="max-w-container mx-auto">
            <h2 className='text-white font-pops lg:text-[64px] w-full lg:w-[842px] font-bold lg:leading-[96px] pb-5'>We exist since 1975 on the oil and gas industry.</h2>
            <div className="text-center lg:text-start">
            <span className='py-[14px] px-[41px] border-2 border-white font-pops text-[16px] text-[#fff] uppercase'>learn more</span>
            </div>
        </div>
    </section>
  )
}

export default Banner