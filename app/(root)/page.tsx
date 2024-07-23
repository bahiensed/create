"use client";

import { useQuery } from "convex/react";
import PodcastCard from '@/components/PodcastCard'
import { PodcastData } from '@/constants'
import { api } from "@/convex/_generated/api";

const Home = () => {
  //const tasks = useQuery(api.tasks.get);
  return (
    <div className='flex flex-col gap-9 mt-9'>
      <section className='flex flex-col gap-5'>
        <h1 className='font-bold text-20 text-white-1'>Trending Podcasts</h1>

        <div className='podcast_grid'>
          {PodcastData.map(({id, title, description, imgURL}) => (
            <PodcastCard
              key={id}
              id={id}
              title={title}
              description={description}
              imgURL={imgURL as string}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home