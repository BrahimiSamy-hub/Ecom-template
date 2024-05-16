import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion'
import { chevron } from '../../assets'
import { useState } from 'react'

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <img
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter && 'rotate-180'
          }`}
          src={chevron}
          alt='Chevron'
          loading='lazy'
        />
      </>
    )}
    className='border-b'
    buttonProps={{
      className: ({}) => `flex w-full p-4 text-left`,
    }}
    contentProps={{
      className: 'transition-height duration-200 ease-out',
    }}
    panelProps={{ className: 'p-4' }}
  />
)

export default function App() {
  const [categories, setCategories] = useState({
    Bags: false,
    Shirts: false,
    Accessories: false,
    'Winter Wear': false,
    Belts: false,
  })

  const [sizes, setSizes] = useState({
    S: false,
    M: false,
    L: false,
    XL: false,
    XXL: false,
  })

  const handleChangeCategory = (category) => {
    setCategories((prevCategories) => ({
      ...prevCategories,
      [category]: !prevCategories[category],
    }))
  }

  const handleChangeSize = (size) => {
    setSizes((prevSizes) => ({
      ...prevSizes,
      [size]: !prevSizes[size],
    }))
  }

  return (
    <div className='mx-2 my-4 border-t w-44 mt-16' data-aos='fade-up'>
      <Accordion transition transitionTimeout={200} allowMultiple>
        <AccordionItem
          header={<h2 className='font-bold'>Categories</h2>}
          initialEntered
        >
          <ul>
            {Object.keys(categories).map((category) => (
              <li key={category} className='flex items-center'>
                <label className='flex items-center space-x-2'>
                  <input
                    type='checkbox'
                    checked={categories[category]}
                    onChange={() => handleChangeCategory(category)}
                    className='custom-checkbox mr-1'
                  />
                  <span className='text-gray-700'>{category}</span>
                </label>
              </li>
            ))}
          </ul>
        </AccordionItem>

        <AccordionItem
          header={<h2 className='font-bold'>Price</h2>}
          initialEntered
        ></AccordionItem>

        <AccordionItem
          header={<h2 className='font-bold'>Size</h2>}
          initialEntered
        >
          <ul>
            {Object.keys(sizes).map((size) => (
              <li key={size} className='flex items-center'>
                <label className='flex items-center space-x-2'>
                  <input
                    type='checkbox'
                    checked={sizes[size]}
                    onChange={() => handleChangeSize(size)}
                    className='custom-checkbox mr-1'
                  />
                  <span className='text-gray-700'>{size}</span>
                </label>
              </li>
            ))}
          </ul>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
