import React from 'react'

const GradientHeading = ({text}) => {
  return (
    <p className='bg-gradient-to-r from-accent to-secondary text-transparent bg-clip-text text-3xl font-bold pt-3'>{text}</p>
  )
}

export default GradientHeading