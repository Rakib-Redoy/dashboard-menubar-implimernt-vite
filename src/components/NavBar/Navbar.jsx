import React, { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import Link from '../Link/Link';


const Navbar = () => {
    const routes = [
        {
          id: 1,
          name: 'Home',
          path: '/',
        },
        {
          id: 2,
          name: 'About',
          path: '/about',
        },
        {
          id: 3,
          name: 'Products',
          path: '/products',
        },
        {
          id: 4,
          name: 'Services',
          path: '/services',
        },
        {
          id: 5,
          name: 'Contact',
          path: '/contact',
        },
      ];
     
      const [open, setOpen] = useState(false)
      
    return (
        <nav className='bg-violet-800 px-4'>
           <div onClick={()=>setOpen(!open)}>
            <span className='md:hidden'>{
            open === true ? 
            <XMarkIcon className='h-6 w-6 text-white'></XMarkIcon>  
            : <Bars3Icon className='h-6 w-6 text-white'></Bars3Icon>}
            </span>
             
             
           </div>
           <ul className={`md:flex mx-auto gap-5 duration-700 absolute md:static ${open ? 'top-6' : '-top-48'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul> 
        </nav>
    );
};

export default Navbar;