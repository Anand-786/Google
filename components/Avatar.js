
import React from 'react'

function Avatar({url, className}) {
  return (
    <img className={`h-10 rounded-full cursor-pointer hover:scale-110 
    transition-all duration-150 ease-out ${className}`} 
    loading='lazy' src={url} alt='profile pic' /> 
  )
}

export default Avatar