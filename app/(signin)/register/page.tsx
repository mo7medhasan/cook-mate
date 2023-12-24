import Image from 'next/image'
import React from 'react'

function Registration() {
  return (
    <div className="flex items-center gap-8 ">
    <div className="flex-1 flex flex-col gap-10 ">
      <div>
        <h1 className="font-Natasha text-5xl font-bold leading-[1.5]">
        Join the CookMate Community!        </h1>
        <p className="text-2xl leading-[1.5]">Create your account</p>
        
      </div>
      {/* <FormLogin/> */}
    </div>
    <div className=" flex-1 relative h-full w-full aspect-[.5]  lg:grid ">
      <Image src={'/Images/CharsResgister.svg'} alt="Chars" sizes="15vw" fill className="object-contain object-right   "/>
    </div>
  </div>
  )
}

export default Registration