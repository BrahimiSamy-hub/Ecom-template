import Filter from '../component/Products/Filter'
import Footer from '../component/Footer'

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '/singleproduct',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2500',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/singleproduct',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2500',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/singleproduct',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2500',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/singleproduct',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2500',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/singleproduct',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2500',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/singleproduct',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2500',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/singleproduct',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2500',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/singleproduct',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2500',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/singleproduct',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2500',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/singleproduct',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2500',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/singleproduct',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2500',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/singleproduct',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2500',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/singleproduct',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2500',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/singleproduct',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2500',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/singleproduct',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2500',
    color: 'Black',
  },
]
const Product = () => {
  return (
    <>
      <section>
        <div className='bg-white'>
          <div className=' px-4 py-10    '>
            {/* <h1 className='font-bold text-7xl'>SHOP</h1> */}
            {/* <div className=' grid grid-cols-6 justify-between'>
            <div className='grid-col-1'></div>
            <div className='col-span-5 justify-between flex' data-aos='fade-up'>
              <small className='ml-2 text-sm opacity-75 '>
                {products.length} Product(s) found
              </small>
              <small>dsq</small>
            </div>
          </div> */}
            <div className='flex '>
              <div className='hidden lg:block sm:block'>
                <Filter />
              </div>

              <div className='mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 '>
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
                      />
                    </div>
                    <div className='mt-4 flex justify-between'>
                      <div>
                        <h3 className='text-sm text-gray-700'>
                          <a href={product.href}>
                            <span
                              aria-hidden='true'
                              className='absolute inset-0'
                            />
                            {product.name}
                          </a>
                        </h3>
                        <p className='mt-1 text-sm text-gray-500'>
                          {product.color}
                        </p>
                      </div>
                      <p className='text-sm font-medium text-gray-900'>
                        {product.price}{' '}
                        <small>
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
