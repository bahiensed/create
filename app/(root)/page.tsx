import React from 'react'
import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <div className='flex flex-col gap-9 mt-9'>
      <section className='flex flex-col gap-5'>
        <h1 className='font-bold text-20 text-white-1'>Trending Podcasts</h1>
        <Button className='bg-orange-1 text-white-1'>Button</Button>
      </section>
    </div>
  )
}

export default Home