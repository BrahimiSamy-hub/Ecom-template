// // import React from 'react'
// // import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
// // import { useNavigate } from 'react-router-dom'

// // const Categories = () => {
// //   const navigate = useNavigate()

// //   const handleCategoryClick = (category) => {
// //     navigate(`/product?category=${encodeURIComponent(category)}`)
// //   }

// //   const categories = ['Réfrigérateurs', 'Laveuses', 'Fours', 'Climatiseurs']

// //   return (
// //     <section className=''>
// //       <div className='flex justify-between items-center mb-6'>
// //         <h2 className='text-2xl font-bold'>Shop by Categories</h2>
// //         <div>
// //           <button className='bg-gray-200 px-4 py-2 mr-2 rounded-md hover:bg-black hover:text-white'>
// //             <FaArrowLeft />
// //           </button>
// //           <button className='bg-gray-200 px-4 py-2 rounded-md hover:bg-black hover:text-white'>
// //             <FaArrowRight />
// //           </button>
// //         </div>
// //       </div>
// //       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
// //         {categories.map((category) => (
// //           <div
// //             key={category}
// //             className='cursor-pointer'
// //             onClick={() => handleCategoryClick(category)}
// //           >
// //             <img
// //               src={`https://via.placeholder.com/300?text=${category.replace(
// //                 ' ',
// //                 '+'
// //               )}`}
// //               alt={category}
// //               className='w-full h-[500px] rounded-md'
// //             />
// //             <div className='text-center mt-4'>
// //               <span className='block text-lg font-medium'>{category}</span>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   )
// // }

// // export default Categories

// import React from 'react'
// import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
// import { useNavigate } from 'react-router-dom'

// const Categories = () => {
//   const navigate = useNavigate()

//   const handleCategoryClick = (category) => {
//     navigate(`/product?category=${encodeURIComponent(category)}`)
//   }

//   const categories = [
//     'Réfrigérateurs',
//     'Laveuses',
//     'Fours',
//     'Micro-ondes',
//     'Climatiseurs',
//   ]

//   return (
//     <section className=''>
//       <div className='flex justify-between items-center mb-6'>
//         <h2 className='text-2xl font-bold'>Shop by Categories</h2>
//         <div>
//           <button className='bg-gray-200 px-4 py-2 mr-2 rounded-md hover:bg-black hover:text-white'>
//             <FaArrowLeft />
//           </button>
//           <button className='bg-gray-200 px-4 py-2 rounded-md hover:bg-black hover:text-white'>
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
//         {categories.map((category) => (
//           <div
//             key={category}
//             className='cursor-pointer'
//             onClick={() => handleCategoryClick(category)}
//           >
//             <img
//               src={`https://via.placeholder.com/300?text=${category.replace(
//                 ' ',
//                 '+'
//               )}`}
//               alt={category}
//               className='w-full h-[500px] rounded-md'
//             />
//             <div className='text-center mt-4'>
//               <span className='block text-lg font-medium'>{category}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Categories

import React from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
  const navigate = useNavigate()

  const handleCategoryClick = (category) => {
    navigate(`/product?categories=${encodeURIComponent(category)}`)
  }

  const categories = [
    'Réfrigérateurs',
    'Laveuses',
    'Fours',
    'Micro-ondes',
    'Climatiseurs',
  ]

  return (
    <section className=''>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl font-bold'>Shop by Categories</h2>
        <div>
          <button className='bg-gray-200 px-4 py-2 mr-2 rounded-md hover:bg-black hover:text-white'>
            <FaArrowLeft />
          </button>
          <button className='bg-gray-200 px-4 py-2 rounded-md hover:bg-black hover:text-white'>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {categories.map((category) => (
          <div
            key={category}
            className='cursor-pointer'
            onClick={() => handleCategoryClick(category)}
          >
            <img
              src={`https://via.placeholder.com/300?text=${category.replace(
                ' ',
                '+'
              )}`}
              alt={category}
              className='w-full h-[500px] rounded-md'
            />
            <div className='text-center mt-4'>
              <span className='block text-lg font-medium'>{category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories
