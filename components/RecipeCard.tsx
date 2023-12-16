"use client"
import Image from 'next/image'
import React from 'react'
import Icon from './ui-assets/Icon'

function RecipeCard() {
  return (
    <div className='relative p-2 max-w-xs flex flex-col justify-center items-center '>
      <div className='image relative w-64 h-48 flex items-center justify-center p-8'>
        <Image src={'/Images/meun2.png'} alt='menu' width={250} height={250} />
        <div className='absolute inset-y-auto gap-2 mb-10  py-1 px-2 right-0 bg-shade rounded-full flex items-center'>
          <Icon name="star-solid" color={"gold"} size={16} />4.5
        </div>
      </div>
      <div className='relative h-72 w-full mx-auto -mt-[30%] flex flex-col gap-6 shadow-sm bg-[#ECECEC] rounded-2xl p-4 pt-[50%] -z-10'>
        <h4 className='text-center font-bold '>
          Classic Greek Salad
        </h4>
        <div className='flex justify-between items-end'>
          <div className='flex flex-col gap-4'>
            <p>
              Time
            </p>
            <p className='font-semibold text-lg'
            >
              15 Mins
            </p>
          </div>
          <button className=' p-2 rounded-full flex items-center justify-center bg-white shadow-sm' onClick={() => { }}>
            <Icon name='save-minus' color={'black'} size={20} />
          </button>
        </div>
      </div>

    </div>
  )
}

export default RecipeCard