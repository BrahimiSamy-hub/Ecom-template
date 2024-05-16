import { bg } from '../../assets'
import { IoMdArrowDroprightCircle } from 'react-icons/io'

const Hero = () => {
  return (
    <div>
      <img
        src={bg}
        alt=''
        className='h-[705px] w-screen object-cover '
        loading='lazy'
      />
      {/* <article className='absolute z-49 flex flex-col gap-4'>
        <small className='text-2xl'>classic Exclusive</small>
        <h1 className='text-[3rem] font-bold'> Womens's Collection</h1>
        <small className='text-2xl'>40% OFF</small>
        <div>
          <button className='border bg-black text-white rounded-lg p-4 flex items-center gap-2 font-bold text-center '>
            <h4 className='flex items-center justify-center text-center'>
              Shop Now
            </h4>
            <IoMdArrowDroprightCircle />
          </button>
        </div>
      </article> */}
    </div>
  )
}

export default Hero
