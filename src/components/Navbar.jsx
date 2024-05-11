import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../contants'

function Navbar() {
  const [active , setactive] = useState('Home')
  const [open , setopen] = useState(false)
  return (
    <nav className='w-full flex justify-between items-center py-6 ' >
      <img src={logo} alt="logo" className='w-[124px] h-[32px] ' />

      <ul className='hidden sm:flex list-none  ' >
        {navLinks.map((link , index)=>(
          <li key={link.id} className={` font-poppins font-normal text-[16px] cursor-pointer ${active === link.title ? 'text-white' : 'text-dimWhite'} ${index === navLinks.length ? 'mr-0' : 'mr-10' } `} onClick={()=>setactive(link.title)} >
            <a href={`#${link.id}`} > {link.title} </a>
          </li>
        ))}
      </ul>
      {/* Mobile */}
      <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img src={open ? close : menu} alt=""  onClick={()=> setopen(!open)} />
        <div className={`absolute  min-w-[140px] sidebar top-20 rounded-[16px] mx-4 my-2 p-6 bg-black-gradient  ${!open ? 'hidden' : 'flex' }`} >
          <ul>
            {navLinks.map((link , index)=>(
              <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-dimWhite'} ${index === navLinks.length ? 'mb-0' : 'mb-4'}`} onClick={()=>setactive(link.title)} >
                <a href={`#${link.id}`} > {link.title} </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Mobile */}
    </nav>
  )
}

export default Navbar