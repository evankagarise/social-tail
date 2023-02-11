import React from 'react'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'

const SavedPage = () => {
  return (
    <Layout>
        <h1 className='text-5xl mb-4'>Saved posts</h1>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
    </Layout>
  )
}

export default SavedPage