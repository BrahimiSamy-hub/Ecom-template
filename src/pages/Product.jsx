// // import Filter from '../component/Products/Filter'
// // import Footer from '../component/Footer'
// // import Pagination from '../component/Products/Pagination'
// // import SortBy from '../component/Products/SortBy'
// // import { products } from '../constant'
// // import { Link } from 'react-router-dom'

// // const Product = () => {
// //   return (
// //     <>
// //       <section>
// //         <div className='bg-white'>
// //           <div className='py-10'>
// //             <div className='flex'>
// //               <div className='hidden lg:block sm:block'>
// //                 <Filter />
// //               </div>
// //               <div className='mt-6 grid grid-cols-2 lg:gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4'>
// //                 <div className='col-span-4 mb-[-50px]' data-aos='fade-up'>
// //                   <div className='flex justify-between'>
// //                     <h3>{products.length} Product(s) found</h3>
// //                     <SortBy />
// //                   </div>
// //                 </div>
// //                 {products.map((product) => (
// //                   <div
// //                     key={product.id}
// //                     className='group relative col-span-4 sm:col-span-4 lg:col-span-1'
// //                     data-aos='fade-up'
// //                   >
// //                     <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:w-full'>
// //                       <img
// //                         src={product.imageSrc}
// //                         alt={product.imageAlt}
// //                         className='h-full w-full object-contain object-center lg:h-full lg:w-full'
// //                         loading='lazy'
// //                       />
// //                     </div>
// //                     <div className='mt-4 flex justify-between'>
// //                       <div>
// //                         <h3 className='text-black'>
// //                           <Link to={product.href}>
// //                             <span
// //                               aria-hidden='true'
// //                               className='absolute inset-0 dont-bold'
// //                             />
// //                             {product.name}
// //                           </Link>
// //                         </h3>
// //                         <small className='text-sm text-gray-500'>
// //                           {product.category}
// //                         </small>
// //                       </div>
// //                       <p className='text-sm font-medium text-gray-900'>
// //                         {product.price}
// //                         <small className='font-bold ml-1'>
// //                           <sup>DA</sup>
// //                         </small>
// //                       </p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //             <Pagination />
// //           </div>
// //         </div>
// //       </section>
// //       <Footer />
// //     </>
// //   )
// // }

// // export default Product

// import React from 'react'
// import { useLocation } from 'react-router-dom'
// import Filter from '../component/Products/Filter'
// import Footer from '../component/Footer'
// import Pagination from '../component/Products/Pagination'
// import SortBy from '../component/Products/SortBy'
// import { products } from '../constant'
// import { Link } from 'react-router-dom'

// const useQuery = () => {
//   return new URLSearchParams(useLocation().search)
// }

// const Product = () => {
//   const query = useQuery()
//   const selectedCategory = query.get('category')

//   const filteredProducts = selectedCategory
//     ? products.filter((product) => product.category === selectedCategory)
//     : products

//   return (
//     <>
//       <section>
//         <div className='bg-white'>
//           <div className='py-10'>
//             <div className='flex'>
//               <div className='hidden lg:block sm:block'>
//                 <Filter />
//               </div>
//               <div className='mt-6 grid grid-cols-2 lg:gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4'>
//                 <div className='col-span-4 mb-[-50px]' data-aos='fade-up'>
//                   <div className='flex justify-between'>
//                     <h3>{filteredProducts.length} Product(s) found</h3>
//                     <SortBy />
//                   </div>
//                 </div>
//                 {filteredProducts.map((product) => (
//                   <div
//                     key={product.id}
//                     className='group relative col-span-4 sm:col-span-4 lg:col-span-1'
//                     data-aos='fade-up'
//                   >
//                     <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:w-full'>
//                       <img
//                         src={product.imageSrc}
//                         alt={product.imageAlt}
//                         className='h-full w-full object-contain object-center lg:h-full lg:w-full'
//                         loading='lazy'
//                       />
//                     </div>
//                     <div className='mt-4 flex justify-between'>
//                       <div>
//                         <h3 className='text-black'>
//                           <Link to={product.href}>
//                             <span
//                               aria-hidden='true'
//                               className='absolute inset-0 dont-bold'
//                             />
//                             {product.name}
//                           </Link>
//                         </h3>
//                         <small className='text-sm text-gray-500'>
//                           {product.category}
//                         </small>
//                       </div>
//                       <p className='text-sm font-medium text-gray-900'>
//                         {product.price}
//                         <small className='font-bold ml-1'>
//                           <sup>DA</sup>
//                         </small>
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <Pagination />
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   )
// }

// export default Product

import React from 'react'
import { useLocation } from 'react-router-dom'
import Filter from '../component/Products/Filter'
import Footer from '../component/Footer'
import Pagination from '../component/Products/Pagination'
import SortBy from '../component/Products/SortBy'
import { products } from '../constant'
import { Link } from 'react-router-dom'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const Product = () => {
  const query = useQuery()
  const selectedCategories = query.get('categories')?.split(',') || []

  const filteredProducts = selectedCategories.length
    ? products.filter((product) =>
        selectedCategories.includes(product.category)
      )
    : products

  return (
    <>
      <section>
        <div className='bg-white'>
          <div className='py-10'>
            <div className='flex'>
              <div className='hidden lg:block sm:block'>
                <Filter />
              </div>
              <div className='mt-6 grid grid-cols-2 lg:gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4'>
                <div className='col-span-4 mb-[-50px]' data-aos='fade-up'>
                  <div className='flex justify-between'>
                    <h3>{filteredProducts.length} Product(s) found</h3>
                    <SortBy />
                  </div>
                </div>
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className='group relative col-span-4 sm:col-span-4 lg:col-span-1'
                    data-aos='fade-up'
                  >
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:w-full'>
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className='h-full w-full object-contain object-center lg:h-full lg:w-full'
                        loading='lazy'
                      />
                    </div>
                    <div className='mt-4 flex justify-between'>
                      <div>
                        <h3 className='text-black'>
                          <Link to={product.href}>
                            <span
                              aria-hidden='true'
                              className='absolute inset-0 dont-bold'
                            />
                            {product.name}
                          </Link>
                        </h3>
                        <small className='text-sm text-gray-500'>
                          {product.category}
                        </small>
                      </div>
                      <p className='text-sm font-medium text-gray-900'>
                        {product.price}
                        <small className='font-bold ml-1'>
                          <sup>DA</sup>
                        </small>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Pagination />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Product
