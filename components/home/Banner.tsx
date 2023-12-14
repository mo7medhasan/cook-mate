"use client"
import React, { useState } from 'react'
import Search from '../search/Search'
import SearchSelect from '../search/SearchSelect'
import Image from 'next/image'
import Icon from '../ui-assets/Icon'

function Banner() {

  const [searchCat, setSearchCat] = useState('Recipe name')
  return (
    <section className='flex items-center container my-6'>
      <div className='flex flex-col gap-6 flex-1'>
        <h1 className='font-extrabold text-4xl'>
          Hello {"Jega"}
        </h1>
        <p className='text-2xl'>What are you cooking today?</p>
        <Search />

      </div>
      <div className='flex-1 flex items-center '>
        <div className="relative w-fit h-fit flex items-center">
          <Image src={'/Images/meun1.png'} alt='' width={480} height={480} className='object-cover origin-center' />
          <p className='absolute font-semibold text-lg max-w-[237px] px-4 py-1.5 bg-[#ECECEC] rounded-full  inset-y-auto -right-10'>Shrimp Chicken Andouille Jambalaya
          </p>
          <div className='absolute flex items-center font-bold text-xl max-w-[237px] px-4 py-1.5 bg-shade rounded-full  inset-y-auto mt-[25%]  gap-2 right-5'>
          <Icon name="star-solid" color={"gold"} size={24} />4.5 </div>
          </div>
      </div>
    </section>
  )
}

export default Banner