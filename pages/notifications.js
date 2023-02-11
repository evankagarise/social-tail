import Link from 'next/link'
import React from 'react'
import Avatar from '../components/Avatar'
import Card from '../components/Card'
import Layout from '../components/Layout'

const NotificationsPage = () => {
  return (
    <Layout>
        <h1 className='text-5xl mb-4'>Notifications</h1>
        <Card>
            <div className='flex gap-3 p-2 items-center border-b border-gray-200'>
                <Link href='/profile'><Avatar /></Link>
                <div>
                    <Link href="/profile" className={'font-semibold'}>John Doe</Link> liked <Link href={'/profile/posts'} className={' text-socialBlue hover-underline'}>your photo</Link>
                </div>
            </div>
            <div className='flex gap-3 p-2 items-center  border-b border-gray-200'>
            <Link href='/profile'><Avatar /></Link>
                <div>
                    <Link href="/profile" className={'font-semibold'}>John Doe</Link> liked <Link href={'/profile/posts'} className={' text-socialBlue hover-underline'}>your photo</Link>
                </div>
            </div>
            <div className='flex gap-3 p-2 items-center  border-b border-gray-200'>
            <Link href='/profile'><Avatar /></Link>
                <div>
                    <Link href="/profile" className={'font-semibold'}>John Doe</Link> liked <Link href={'/profile/posts'} className={' text-socialBlue hover-underline'}>your photo</Link>
                </div>
            </div>
            <div className='flex gap-3 p-2 items-center  border-b border-gray-200'>
            <Link href='/profile'><Avatar /></Link>
                <div>
                    <Link href="/profile" className={'font-semibold'}>John Doe</Link> liked <Link href={'/profile/posts'} className={' text-socialBlue hover-underline'}>your photo</Link>
                </div>
            </div>
            <div className='flex gap-3 p-2 items-center  border-b border-gray-200'>
            <Link href='/profile'><Avatar /></Link>
                <div>
                    <Link href="/profile" className={'font-semibold'}>John Doe</Link> liked <Link href={'/profile/posts'} className={' text-socialBlue hover-underline'}>your photo</Link>
                </div>
            </div>
        </Card>
    </Layout>
  )
}

export default NotificationsPage