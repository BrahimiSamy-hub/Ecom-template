// // // import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion'
// // // import { chevron } from '../../assets'
// // // import { useState } from 'react'

// // // const AccordionItem = ({ header, ...rest }) => (
// // //   <Item
// // //     {...rest}
// // //     header={({ state: { isEnter } }) => (
// // //       <>
// // //         {header}
// // //         <img
// // //           className={`ml-auto transition-transform duration-200 ease-out ${
// // //             isEnter && 'rotate-180'
// // //           }`}
// // //           src={chevron}
// // //           alt='Chevron'
// // //           loading='lazy'
// // //         />
// // //       </>
// // //     )}
// // //     className='border-b'
// // //     buttonProps={{
// // //       className: ({}) => `flex w-full p-4 text-left`,
// // //     }}
// // //     contentProps={{
// // //       className: 'transition-height duration-200 ease-out',
// // //     }}
// // //     panelProps={{ className: 'p-4' }}
// // //   />
// // // )

// // // export default function App() {
// // //   const [categories, setCategories] = useState({
// // //     Réfrigérateurs: false,
// // //     Laveuses: false,
// // //     Fours: false,
// // //     'Micro-ondes': false,
// // //     Climatiseurs: false,
// // //   })

// // //   const [types, setTypes] = useState({
// // //     Réfrigérateurs: {
// // //       'Type A': false,
// // //       'Type B': false,
// // //     },
// // //     Laveuses: {
// // //       'Chargement par le haut': false,
// // //       'Chargement frontal': false,
// // //     },
// // //     Fours: {
// // //       'Four à convection': false,
// // //       'Four à micro-ondes': false,
// // //     },
// // //     'Micro-ondes': {
// // //       'Type A': false,
// // //       'Type B': false,
// // //     },
// // //     Climatiseurs: {
// // //       'Climatiseur split': false,
// // //       'Climatiseur de fenêtre': false,
// // //     },
// // //   })

// // //   const handleChangeCategory = (category) => {
// // //     setCategories((prevCategories) => ({
// // //       ...prevCategories,
// // //       [category]: !prevCategories[category],
// // //     }))
// // //   }

// // //   const handleChangeType = (category, type) => {
// // //     setTypes((prevTypes) => ({
// // //       ...prevTypes,
// // //       [category]: {
// // //         ...prevTypes[category],
// // //         [type]: !prevTypes[category][type],
// // //       },
// // //     }))
// // //   }

// // //   return (
// // //     <div
// // //       className='sticky top-20 mx-2 my-4 border-t w-44 mt-16 sm:w-64'
// // //       data-aos='fade-up'
// // //     >
// // //       <Accordion transition transitionTimeout={200} allowMultiple>
// // //         <AccordionItem
// // //           header={<h2 className='font-bold'>Catégories</h2>}
// // //           initialEntered
// // //         >
// // //           <ul>
// // //             {Object.keys(categories).map((category) => (
// // //               <li key={category} className='flex items-center'>
// // //                 <label className='flex items-center space-x-2'>
// // //                   <input
// // //                     type='checkbox'
// // //                     checked={categories[category]}
// // //                     onChange={() => handleChangeCategory(category)}
// // //                     className='custom-checkbox mr-1'
// // //                   />
// // //                   <span className='text-gray-700'>{category}</span>
// // //                 </label>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </AccordionItem>

// // //         {Object.keys(categories).map(
// // //           (category) =>
// // //             categories[category] && (
// // //               <AccordionItem
// // //                 key={category}
// // //                 header={<h2 className='font-bold'>{category} Types</h2>}
// // //                 initialEntered
// // //               >
// // //                 <ul>
// // //                   {Object.keys(types[category]).map((type) => (
// // //                     <li key={type} className='flex items-center'>
// // //                       <label className='flex items-center space-x-2'>
// // //                         <input
// // //                           type='checkbox'
// // //                           checked={types[category][type]}
// // //                           onChange={() => handleChangeType(category, type)}
// // //                           className='custom-checkbox mr-1'
// // //                         />
// // //                         <span className='text-gray-700'>{type}</span>
// // //                       </label>
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </AccordionItem>
// // //             )
// // //         )}
// // //       </Accordion>
// // //     </div>
// // //   )
// // // }

// // import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion'
// // import { chevron } from '../../assets'
// // import { useState, useEffect } from 'react'
// // import { useLocation, useNavigate } from 'react-router-dom'

// // const useQuery = () => {
// //   return new URLSearchParams(useLocation().search)
// // }

// // const AccordionItem = ({ header, ...rest }) => (
// //   <Item
// //     {...rest}
// //     header={({ state: { isEnter } }) => (
// //       <>
// //         {header}
// //         <img
// //           className={`ml-auto transition-transform duration-200 ease-out ${
// //             isEnter && 'rotate-180'
// //           }`}
// //           src={chevron}
// //           alt='Chevron'
// //           loading='lazy'
// //         />
// //       </>
// //     )}
// //     className='border-b'
// //     buttonProps={{
// //       className: ({}) => `flex w-full p-4 text-left`,
// //     }}
// //     contentProps={{
// //       className: 'transition-height duration-200 ease-out',
// //     }}
// //     panelProps={{ className: 'p-4' }}
// //   />
// // )

// // export default function App() {
// //   const query = useQuery()
// //   const navigate = useNavigate()
// //   const selectedCategories = query.get('categories')?.split(',') || []

// //   const initialCategoriesState = {
// //     Réfrigérateurs: false,
// //     Laveuses: false,
// //     Fours: false,
// //     'Micro-ondes': false,
// //     Climatiseurs: false,
// //   }

// //   const [categories, setCategories] = useState(initialCategoriesState)

// //   const [types, setTypes] = useState({
// //     Réfrigérateurs: {
// //       'Type A': false,
// //       'Type B': false,
// //     },
// //     Laveuses: {
// //       'Chargement par le haut': false,
// //       'Chargement frontal': false,
// //     },
// //     Fours: {
// //       'Four à convection': false,
// //       'Four à micro-ondes': false,
// //     },
// //     'Micro-ondes': {
// //       'Type A': false,
// //       'Type B': false,
// //     },
// //     Climatiseurs: {
// //       'Climatiseur split': false,
// //       'Climatiseur de fenêtre': false,
// //     },
// //   })

// //   useEffect(() => {
// //     const updatedCategories = { ...initialCategoriesState }
// //     selectedCategories.forEach((category) => {
// //       updatedCategories[category] = true
// //     })
// //     setCategories(updatedCategories)
// //   }, [selectedCategories])

// //   const handleChangeCategory = (category) => {
// //     const updatedCategories = {
// //       ...categories,
// //       [category]: !categories[category],
// //     }
// //     setCategories(updatedCategories)

// //     const newSelectedCategories = Object.keys(updatedCategories).filter(
// //       (key) => updatedCategories[key]
// //     )

// //     navigate(`/product?categories=${newSelectedCategories.join(',')}`)
// //   }

// //   const handleChangeType = (category, type) => {
// //     setTypes((prevTypes) => ({
// //       ...prevTypes,
// //       [category]: {
// //         ...prevTypes[category],
// //         [type]: !prevTypes[category][type],
// //       },
// //     }))
// //   }

// //   return (
// //     <div
// //       className='sticky top-20 mx-2 my-4 border-t w-44 mt-16 sm:w-64'
// //       data-aos='fade-up'
// //     >
// //       <Accordion transition transitionTimeout={200} allowMultiple>
// //         <AccordionItem
// //           header={<h2 className='font-bold'>Catégories</h2>}
// //           initialEntered
// //         >
// //           <ul>
// //             {Object.keys(categories).map((category) => (
// //               <li key={category} className='flex items-center'>
// //                 <label className='flex items-center space-x-2'>
// //                   <input
// //                     type='checkbox'
// //                     checked={categories[category]}
// //                     onChange={() => handleChangeCategory(category)}
// //                     className='custom-checkbox mr-1'
// //                   />
// //                   <span className='text-gray-700'>{category}</span>
// //                 </label>
// //               </li>
// //             ))}
// //           </ul>
// //         </AccordionItem>

// //         {Object.keys(categories).map(
// //           (category) =>
// //             categories[category] && (
// //               <AccordionItem
// //                 key={category}
// //                 header={<h2 className='font-bold'>{category} Types</h2>}
// //                 initialEntered
// //               >
// //                 <ul>
// //                   {Object.keys(types[category]).map((type) => (
// //                     <li key={type} className='flex items-center'>
// //                       <label className='flex items-center space-x-2'>
// //                         <input
// //                           type='checkbox'
// //                           checked={types[category][type]}
// //                           onChange={() => handleChangeType(category, type)}
// //                           className='custom-checkbox mr-1'
// //                         />
// //                         <span className='text-gray-700'>{type}</span>
// //                       </label>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </AccordionItem>
// //             )
// //         )}
// //       </Accordion>
// //     </div>
// //   )
// // }

// import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion'
// import { chevron } from '../../assets'
// import { useState, useEffect } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'

// const useQuery = () => {
//   return new URLSearchParams(useLocation().search)
// }

// const AccordionItem = ({ header, ...rest }) => (
//   <Item
//     {...rest}
//     header={({ state: { isEnter } }) => (
//       <>
//         {header}
//         <img
//           className={`ml-auto transition-transform duration-200 ease-out ${
//             isEnter && 'rotate-180'
//           }`}
//           src={chevron}
//           alt='Chevron'
//           loading='lazy'
//         />
//       </>
//     )}
//     className='border-b'
//     buttonProps={{
//       className: ({}) => `flex w-full p-4 text-left`,
//     }}
//     contentProps={{
//       className: 'transition-height duration-200 ease-out',
//     }}
//     panelProps={{ className: 'p-4' }}
//   />
// )

// export default function App() {
//   const query = useQuery()
//   const navigate = useNavigate()
//   const selectedCategories = query.get('categories')?.split(',') || []

//   const initialCategoriesState = {
//     Réfrigérateurs: false,
//     Laveuses: false,
//     Fours: false,
//     'Micro-ondes': false,
//     Climatiseurs: false,
//   }

//   const [categories, setCategories] = useState(initialCategoriesState)

//   const [types, setTypes] = useState({
//     Réfrigérateurs: {
//       'Type A': false,
//       'Type B': false,
//     },
//     Laveuses: {
//       'Chargement par le haut': false,
//       'Chargement frontal': false,
//     },
//     Fours: {
//       'Four à convection': false,
//       'Four à micro-ondes': false,
//     },
//     'Micro-ondes': {
//       'Type A': false,
//       'Type B': false,
//     },
//     Climatiseurs: {
//       'Climatiseur split': false,
//       'Climatiseur de fenêtre': false,
//     },
//   })

//   useEffect(() => {
//     const updatedCategories = { ...initialCategoriesState }
//     selectedCategories.forEach((category) => {
//       updatedCategories[category] = true
//     })
//     setCategories(updatedCategories)
//   }, [selectedCategories])

//   const handleChangeCategory = (category) => {
//     const updatedCategories = {
//       ...categories,
//       [category]: !categories[category],
//     }
//     setCategories(updatedCategories)

//     const newSelectedCategories = Object.keys(updatedCategories).filter(
//       (key) => updatedCategories[key]
//     )

//     if (newSelectedCategories.length === 0) {
//       navigate(`/product`)
//     } else {
//       navigate(`/product?categories=${newSelectedCategories.join(',')}`)
//     }
//   }

//   const handleChangeType = (category, type) => {
//     setTypes((prevTypes) => ({
//       ...prevTypes,
//       [category]: {
//         ...prevTypes[category],
//         [type]: !prevTypes[category][type],
//       },
//     }))
//   }

//   return (
//     <div
//       className='sticky top-20 mx-2 my-4 border-t w-44 mt-16 sm:w-64'
//       data-aos='fade-up'
//     >
//       <Accordion transition transitionTimeout={200} allowMultiple>
//         <AccordionItem
//           header={<h2 className='font-bold'>Catégories</h2>}
//           initialEntered
//         >
//           <ul>
//             {Object.keys(categories).map((category) => (
//               <li key={category} className='flex items-center'>
//                 <label className='flex items-center space-x-2'>
//                   <input
//                     type='checkbox'
//                     checked={categories[category]}
//                     onChange={() => handleChangeCategory(category)}
//                     className='custom-checkbox mr-1'
//                   />
//                   <span className='text-gray-700'>{category}</span>
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </AccordionItem>

//         {Object.keys(categories).map(
//           (category) =>
//             categories[category] && (
//               <AccordionItem
//                 key={category}
//                 header={<h2 className='font-bold'>{category} Types</h2>}
//                 initialEntered
//               >
//                 <ul>
//                   {Object.keys(types[category]).map((type) => (
//                     <li key={type} className='flex items-center'>
//                       <label className='flex items-center space-x-2'>
//                         <input
//                           type='checkbox'
//                           checked={types[category][type]}
//                           onChange={() => handleChangeType(category, type)}
//                           className='custom-checkbox mr-1'
//                         />
//                         <span className='text-gray-700'>{type}</span>
//                       </label>
//                     </li>
//                   ))}
//                 </ul>
//               </AccordionItem>
//             )
//         )}
//       </Accordion>
//     </div>
//   )
// }

import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion'
import { chevron } from '../../assets'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

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
  const query = useQuery()
  const navigate = useNavigate()
  const selectedCategories = query.get('categories')?.split(',') || []

  const initialCategoriesState = {
    Réfrigérateurs: false,
    Laveuses: false,
    Fours: false,
    'Micro-ondes': false,
    Climatiseurs: false,
  }

  const [categories, setCategories] = useState(initialCategoriesState)

  const [types, setTypes] = useState({
    Réfrigérateurs: {
      'Type A': false,
      'Type B': false,
    },
    Laveuses: {
      'Chargement par le haut': false,
      'Chargement frontal': false,
    },
    Fours: {
      'Four à convection': false,
      'Four à micro-ondes': false,
    },
    'Micro-ondes': {
      'Type A': false,
      'Type B': false,
    },
    Climatiseurs: {
      'Climatiseur split': false,
      'Climatiseur de fenêtre': false,
    },
  })

  useEffect(() => {
    const updatedCategories = { ...initialCategoriesState }
    selectedCategories.forEach((category) => {
      updatedCategories[category] = true
    })
    setCategories(updatedCategories)
  }, [selectedCategories])

  const handleChangeCategory = (category) => {
    const updatedCategories = {
      ...categories,
      [category]: !categories[category],
    }
    setCategories(updatedCategories)

    const newSelectedCategories = Object.keys(updatedCategories).filter(
      (key) => updatedCategories[key]
    )

    if (newSelectedCategories.length === 0) {
      navigate(`/product`)
    } else {
      navigate(`/product?categories=${newSelectedCategories.join(',')}`)
    }
  }

  const handleChangeType = (category, type) => {
    setTypes((prevTypes) => ({
      ...prevTypes,
      [category]: {
        ...prevTypes[category],
        [type]: !prevTypes[category][type],
      },
    }))
  }

  return (
    <div
      className='sticky top-20 mx-2 my-4 border-t w-44 mt-16 sm:w-64'
      data-aos='fade-up'
    >
      <Accordion transition transitionTimeout={200} allowMultiple>
        <AccordionItem
          header={<h2 className='font-bold'>Catégories</h2>}
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

        {Object.keys(categories).map(
          (category) =>
            categories[category] && (
              <AccordionItem
                key={category}
                header={<h2 className='font-bold'>{category} Types</h2>}
                initialEntered
              >
                <ul>
                  {Object.keys(types[category]).map((type) => (
                    <li key={type} className='flex items-center'>
                      <label className='flex items-center space-x-2'>
                        <input
                          type='checkbox'
                          checked={types[category][type]}
                          onChange={() => handleChangeType(category, type)}
                          className='custom-checkbox mr-1'
                        />
                        <span className='text-gray-700'>{type}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </AccordionItem>
            )
        )}
      </Accordion>
    </div>
  )
}
