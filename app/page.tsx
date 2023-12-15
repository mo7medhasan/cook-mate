import Header from '@/components/Header'
import Banner from '@/components/home/Banner'
import ContainerFilter from '@/components/home/ContainerFilter'
import Recipes from '@/components/home/Recipes'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=" flex min-h-screen flex-col">
 <Banner />
 <ContainerFilter />
 <Recipes/>
    </div>
  )
}
