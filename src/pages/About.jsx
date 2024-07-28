import React from 'react'
import Footer from '../component/Footer'
import Features from '../component/About/Features'

const About = () => {
  return (
    <>
      <section className='p-10'>
        <div className='mt-16 gap-20 flex flex-col h-[540px] md:flex-row'>
          <div className='flex flex-col'>
            <h2 className='text-4xl font-bold'>Chiheb Electroménager</h2>
            <div className='w-[400px] h-1 bg-black mt-2 mb-4'></div>
            <p className=' leading-8 mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio praesentium possimus ipsam ab fuga, nemo fugiat aliquam
              vero numquam similique temporibus veritatis labore aperiam,
              debitis tenetur earum molestias quas sunt.
            </p>
          </div>

          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.3234085215827!2d6.170701476423837!3d35.54571417263126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f4119ddc51bda7%3A0x139fc644d71af4e5!2sCaballero%20Parfumerie!5e0!3m2!1sfr!2sdz!4v1700934151797!5m2!1sfr!2sdz'
            title='localisation'
            className='w-full h-[1500px] md:h-full rounded-md'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </section>
      <Features />

      <Footer />
    </>
  )
}

export default About
