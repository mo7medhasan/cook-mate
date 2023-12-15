"use client"
import React, { useState } from 'react'
import Filter from './Filter'
const cat = ["All Recipes", "Arabian", "Asian", "Italian", "Indian", "Chinese"]
function ContainerFilter() {
  const [category, setCategory] = useState("All Recipes")
  return (
    <div className='container flex justify-between items-center'>
      <div className='flex-1 flex flex-wrap items-center gap-3'>
        {cat.map((item, index) => (
          <button key={item + index} onClick={()=>setCategory(item)} className={` ${category === item ? 'bg-primary text-white' : 'bg-[#FFFCF7] text-black  border border-[#363636]/10'} rounded-xl px-6 py-3`}>
            {item}
          </button>))}
      </div>
      <Filter />
    </div>
  )
}

export default ContainerFilter