import LazyImage from '@/components/LazyImage'
import Router from 'next/router'
import { siteConfig } from '@/lib/config'

const InfoCard = (props) => {
  const { siteInfo } = props
  return <div id='info-card' className='py-0'>
    <div className='items-center justify-center'>
        <div className='hover:scale-105 transform duration-200 cursor-pointer flex justify-center' onClick={ () => { Router.push('/about') }}>
            <LazyImage src={siteInfo?.icon} className='rounded-full' width={100} alt={siteConfig('AUTHOR')}/>
         </div>
        <div className='flex-col flex justify-center'>
            <div className='text-xl py-2 hover:scale-105 transform duration-200 flex justify-center dark:text-gray-300'>{siteConfig('AUTHOR')}</div>
            <div className='font-light text-gray-600 mb-1 hover:scale-105 transform duration-200 flex justify-center dark:text-gray-400'>{siteConfig('BIO')}</div>
        </div>
    </div>
  </div>
}

export default InfoCard
