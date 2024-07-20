import React from 'react'

const PodcastDetails = ({ params }: { params: { id: string }}) => {
  return (
    <p className='text-white-1'>Podcast {params.id}</p>
  )
}

export default PodcastDetails