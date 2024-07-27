import React from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

const Categories = () => {
  return (
    <section className=''>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl font-bold'>Shop by Categories</h2>
        <div>
          <button className='bg-gray-200  px-4 py-2 mr-2 rounded-md hover:bg-black hover:text-white'>
            <FaArrowLeft />
          </button>
          <button className='bg-gray-200  px-4 py-2 rounded-md hover:bg-black hover:text-white'>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className=''>
          <img
            src='https://via.placeholder.com/300?text=Casual+Wear'
            alt='Casual Wear'
            className='w-full h-[500px] rounded-md'
          />
          <div className='text-center mt-4'>
            <span className='block text-lg font-medium'>Casual Wear</span>
          </div>
        </div>
        <div className=''>
          <img
            src='https://via.placeholder.com/300?text=Kids+Wear'
            alt='Western Wear'
            className='w-full h-[500px] rounded-md'
          />
          <div className='text-center mt-4'>
            <span className='block text-lg font-medium'>Western Wear</span>
          </div>
        </div>
        <div className=''>
          <img
            src='https://via.placeholder.com/300?text=Western+Wear'
            alt='Ethnic Wear'
            className='w-full h-[500px] rounded-md'
          />
          <div className='text-center mt-4'>
            <span className='block text-lg font-medium'>Ethnic Wear</span>
          </div>
        </div>
        <div className=''>
          <img
            src='https://via.placeholder.com/300?text=Ethnic+Wear'
            alt='Kids Wear'
            className='w-full h-[500px] rounded-md'
          />
          <div className='text-center mt-4'>
            <span className='block text-lg font-medium'>Kids Wear</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories
