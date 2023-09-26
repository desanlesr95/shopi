import { useContext } from 'react'
import { NavLink} from 'react-router-dom'
import { ShoopingCartContext } from '../../Context'
import {ShoppingBagIcon} from '@heroicons/react/24/solid'
import { NavBarItem } from '../NavBarItem'



const Navbar = () => {
    const context = useContext(ShoopingCartContext)
    const activeStyle = 'underline underline-offset-4 text-sm'
    
  
    return (
      <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
        <ul className='flex items-center gap-3'>
          <li className='font-semibold text-lg md:text-sm'>
            <NavLink to='/'>
              Shopi
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              All
            </NavLink>
          </li>
         
          {
            context.category.map((category,index) =>(<NavBarItem key={index} category={category}/>))
          }

          <li>
            <input type="text" placeholder='Search products' className='md:text-sm rounded-lg shadow-md p-1 w-32 xl:w-64 lg:w-64 md:w-40  text-slate-600 text-md font-semibold focus:w-96'
              value={context.searchTitle} onChange={
              (event)=>{
                context.setSearchTitle(event.target.value);
              }
            } />
          </li>
        </ul>
        


        <ul className='flex items-center gap-3'>
          <li className='text-black/60'>
            lendev.sara@gmail.com
          </li>
          <li>
            <NavLink
              to='/my-orders'
              className={`text-sm md:text-sm lg:text-md xl:text-md {({ isActive }) =>
                isActive ? activeStyle : undefined
              }`}>
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/my-account'
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/sing-in'
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Sign In
            </NavLink>
          </li>
          <li>
            <ShoppingBagIcon className='w-6' onClick={()=>context.openCartDetail()}/> {context.count}
          </li>
        </ul>
      </nav>
    )
  }

export { Navbar}