import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SearchResultItem({ product, setshowresults }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <a
        className="flex items-center gap-4"
        onClick={() => setshowresults(false)}
      >
        <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-[#CDCFDC] p-1">
          <Image
            src={product.thumbnail_img}
            layout="fill"
            width={40}
            height={40}
            alt={product.name}
            objectFit="cover"
            className=" rounded-xl bg-cover object-cover"
          />
        </div>
        <p>{product.query}</p>
      </a>
    </Link>
  )
}
