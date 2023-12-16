import React from 'react'
import RecipeCard from '../RecipeCard'

function Recipes() {
  return (
    <div className='container flex flex-wrap gap-5 justify-around'>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
    </div>
  )
}

export default Recipes