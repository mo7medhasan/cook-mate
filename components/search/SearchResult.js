import React from 'react'
import SearchResultItem from './SearchResultItem'
export default function SearchResult({
  products,
  showresults,
  setshowresults,
}) {
  return (
    <>
      {showresults && (
        <div className="fixed inset-0" onClick={() => setshowresults(false)} />
      )}
      <div
        className={`absolute top-14 z-50  flex w-full flex-col  gap-4 rounded-xl border border-[#CDCFDC]/50 bg-white p-4 shadow-3xl ${
          showresults ? 'block' : 'hidden'
        }`}
      >
        {products?.map((product, idx) => (
          <SearchResultItem
            product={product}
            key={idx}
            setshowresults={setshowresults}
          />
        ))}
      </div>
    </>
  )
}
