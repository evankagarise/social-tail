import React from 'react'
import NavigationCard from './NavigationCard'
import PostCard from './PostCard'
import PostFormCard from './PostFormCard'
const Layout = ({children}) => {
  return (
    <div className='flex mt-4 mx-auto max-w-4xl gap-6'>
        <div className='w-1/4 '>
          <NavigationCard />
        </div>
        <div className='w-3/4'>
          {children}
        </div>
      </div>
  )
}

export default Layout