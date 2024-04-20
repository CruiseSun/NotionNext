import LazyImage from '@/components/LazyImage'
import Router from 'next/router'
import { siteConfig } from '@/lib/config'

const InfoCard = (props) => {
  const { siteInfo } = props
  return <div id='info-card' className='py-0'>
    <div className='text-lg flex justify-center text-red-600 dark:text-gray-300 font-sans border-b-2 border-red-600'><b>About</b></div>
    <div className='items-center justify-center'>
        <div className='hover:scale-105 transform duration-200 cursor-pointer flex justify-center pt-2' onClick={ () => { Router.push('/about') }}>
            <LazyImage src={siteInfo?.icon} className='rounded-full' width={100} alt={siteConfig('AUTHOR')}/>
         </div>
        <div className='flex-col flex justify-center'>
            <div className='text-lg py-2 duration-200 flex justify-center dark:text-gray-300'>{siteConfig('AUTHOR')}</div>
            <div className='font-light text-gray-600 mb-1 duration-200 flex justify-center dark:text-gray-400'>{siteConfig('BIO')}</div>
        </div>
    </div>
  </div>
}

export default InfoCard
