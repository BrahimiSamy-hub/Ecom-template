import { yourlogo, MenuSvg } from '../assets'
import { navigation } from '../constant'
import { NavLink } from 'react-router-dom'
import { IoCartOutline } from 'react-icons/io5'
import { useCart } from '../context/CartContext'
import { useState } from 'react'

const Navbar = () => {
  const { toggleCart, cartItems } = useCart()

  const [openNavigation, setOpenNavigation] = useState(false)

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false)
      enablePageScroll()
    } else {
      setOpenNavigation(true)
      disablePageScroll()
    }
  }

  const handleClick = () => {
    if (!openNavigation) return
    enablePageScroll()
    setOpenNavigation(false)
  }

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className='z-50 fixed flex w-full bg-white p-4 justify-between px-14 items-center shadow-sm min-h-20'>
      <div className='justify-center'>
        <NavLink to='/'>
          <img src={yourlogo} alt='logo' className='' loading='lazy' />
        </NavLink>
      </div>
      <nav className='items-center justify-center hidden lg:flex'>
        <ul className='flex gap-10'>
          {navigation.map((item) => (
            <li key={item.id} className='relative font-bold group'>
              <NavLink
                to={item.url}
                className={({ isActive }) =>
                  `relative ${
                    isActive
                      ? 'text-black after:w-full'
                      : 'text-black after:w-0'
                  } 
                  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 group-hover:after:w-full`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <button
          className='ml-6 mr-2 relative hidden lg:flex'
          onClick={toggleCart}
        >
          <IoCartOutline size={40} />
          <span className='absolute -top-2 -right-3 flex items-center justify-center w-6 h-6 font-bold text-white bg-black rounded-full '>
            <h6 className='mb-0.5'>{totalItems}</h6>
          </span>
        </button>
        <button className='ml-auto lg:hidden' onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </button>
      </div>
    </div>
  )
}

export default Navbar
