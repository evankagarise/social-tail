import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import NavigationCard from '../components/NavigationCard'
import PostFormCard from '../components/PostFormCard'
import Avatar from '../components/Avatar'
import PostCard from '../components/PostCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className='flex mt-4 mx-auto max-w-4xl gap-6'>
        <div className='w-1/4 '>
          <NavigationCard />
        </div>
        <div className='w-3/4'>
          <PostFormCard />
          <PostCard />
        </div>
      </div>
)};
