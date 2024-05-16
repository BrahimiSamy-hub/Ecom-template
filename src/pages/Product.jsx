import Filter from '../component/Products/Filter'
import Footer from '../component/Footer'
import { products } from '../constant'

const Product = () => {
  return (
    <>
      <section>
        <div className='bg-white'>
          <div className='py-10'>
            <div className='flex '>
              <div className='hidden lg:block sm:block'>
                <Filter />
              </div>
              <div className='mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 '>
                <div className=' col-span-4 mb-[-50px]' data-aos='fade-up'>
                  <div className='flex justify-between'>
                    <h3>{products.length} Product(s) found</h3>
                    <span>Sort by</span>
                  </div>
                </div>
                {products.map((product) => (
                  <div
                    key={product.id}
                    className='group relative'
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
                        <h3 className=' text-black'>
                          <a href={product.href}>
                            <span
                              aria-hidden='true'
                              className='absolute inset-0 dont-bold'
                            />
                            {product.name}
                          </a>
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
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Product
