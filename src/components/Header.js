import React from 'react'

const Header = () => {
  return (
    <>
      <div className='bg-gray-300 px-2 py-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 lg:px-30 xl:px-60 font-body'>
          <div className='flex justify-start lg:pl-5 items-center'>
            <a
              className='text-lg inline-block'
              href='https://apod.nasa.gov/apod/astropix.html'
            >
              <img
                className='inline-block h-12 w-auto p-2'
                src='https://api.nasa.gov/assets/img/favicons/favicon-192.png'
                alt='NASA'
              />
              <p className='text-lg inline-block'>
                Astronomy Picture of the Day
              </p>
            </a>
          </div>
          <div className='flex justify-end lg:pr-10 items-center'>
            <span className='pr-2'>By</span>
            <a href='https://mattmarsandi.com'>Marsandi</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
