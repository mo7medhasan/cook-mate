"use client"
import FirstRecipeDetailsStep1 from '@/components/new-recipe/FirstRecipeDetailsStep1'
import SecondRecipeStepsStep2 from '@/components/new-recipe/SecondRecipeStepsStep2'
import { useSearchParams } from 'next/navigation'
import React, { useMemo, useState } from 'react'

function NewRecipe() {
  const searchParams = useSearchParams()
 const [step, setStep] = useState(searchParams.get('step')||1)
 const [data, setData] = useState({})

 useMemo(() => setStep(searchParams.get('step')||1), [searchParams])
  return (
    <div className='container space-y-6 relative' >
      <h1 className='my-6 font-bold lg:max-w-2xl text-4xl'> 
      Share Your Recipe with the CookMate Community!</h1>
    {step===1? <FirstRecipeDetailsStep1 setData={setData} />:<SecondRecipeStepsStep2 setData={setData}/>
}   
    </div>
  )
}

export default NewRecipe