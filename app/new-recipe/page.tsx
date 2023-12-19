"use client"
import FirstRecipeDetailsStep1 from '@/components/new-recipe/FirstRecipeDetailsStep1'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

function NewRecipe() {
  const searchParams = useSearchParams()
 const [step, setStep] = useState(searchParams.get('step')||1)
   

  return (
    <div className='container space-y-6'>
      <h1 className='my-6 font-bold md:max-w-2xl text-4xl'> 
      Share Your Recipe with the CookMate Community!</h1>
     <FirstRecipeDetailsStep1 />
   
    </div>
  )
}

export default NewRecipe