"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Icon from '../ui-assets/Icon'
import SearchSelect from './SearchSelect'

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchCat, setSearchCat] = useState('Recipe name')
    const [showresults, setshowresults] = useState(false)
    // const { data: searchProducts, refetch } = useSearchBarQuery({
    //   query_key: searchValue.trim(),
    //   type: 'product',
    // })
  return (
     <form
     className="relative  mt-2 flex w-full rounded-[10px] max-w-[80%]"
    //  onFocus={() => setshowresults(true)}
    //  onSubmit={(e) => {
    //    e.preventDefault()
    //    Router.push(`/search?s=${searchValue}`)
    //  }}
   >
     <div className="relative z-[10]    flex-auto">
       <div className=" absolute inset-y-0  max-w-[7.5rem] w-[30%] left-0 flex items-center pl-1">
       <SearchSelect value={searchCat}
setValue ={setSearchCat}/>

       </div>
       <input
         type="text"
         name="search"
         id="search"
         value={searchValue}
         onChange={(e) => setSearchValue(e.target.value)}
         className="z-[10] block  h-14 w-full border rounded-[10px] border-[#CDCFDC] pl-[30%] font-medium focus:outline-primary focus:border-primary focus:ring-primary sm:text-sm"
         placeholder={'Search for new Recipes'}
       />{' '}
       <Link
         href={`/search?s=${searchValue}`}
         color="primary"
         className="absolute inset-y-0 right-0   z-[10] flex h-14 w-10 items-center justify-center rounded-l-none rounded-r-[10px] !border-none  !p-0  "
       >
         <Icon name="search-normal-1" size={24} />
       </Link>
     </div>
{/* 
     {searchProducts?.length > 0 && (
       <SearchResult
         products={searchProducts}
         showresults={showresults}
         setshowresults={setshowresults}
       />
     )} */}
   </form>
  )
}

export default Search