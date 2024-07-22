import React from 'react'
import Image from 'next/image'

const PodcastCard = ({
  id, title, description, imgURL
}: {
    id: number,
    title: string,
    description: string,
    imgURL: string,
}) => {
  return (
    <div className='cursor-pointer'>
      <figure className='flex flex-col gap-2'>
        <Image
          className='aspect-square h-fit w-full rounded-xl 2xl:size[200px]'
          alt={title}
          src={imgURL}
          width={174}
          height={174}
        />
        <div className='flex flex-col'>
          <h2 className='text-16 truncate font-bold text-white-1'>{title}</h2>
          <p className='text-12 truncate font-normal capitalizet text-white-4'>{description}</p>
        </div>
      </figure>
    </div>
  )
}

export default PodcastCard