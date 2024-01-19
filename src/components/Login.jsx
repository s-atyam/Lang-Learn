import React from 'react'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className='main_container_1 flex_center border flex-col'>
      <div className='main_container_2 flex_center'>
        <div className='flex_evenly mobile_hide w-1/2 h-full flex-col' style={{backgroundColor:'var(--purple-gray)'}}>
          <h1 className='heading_1' style={{fontWeight:'500',color:'white'}}>Login</h1>
          <h1 className='heading_1 text-center' style={{color:'gray'}}>Nice to see you again<br/> <span>Welcome Back</span> </h1>
        </div>
        <form className='flex_evenly w-11/12 sm:w-1/2 p-4 lg:p-8 h-full py-28 flex-col' style={{backgroundColor:'var(--light-gray-color)'}}>
          <h2 className='heading_2 w-full'>Login account</h2>
          <div className='w-full'>
            <h3 className='font-bold mb-1 text-sm'>Your Email</h3>
            <input type="text" placeholder='Full name' className='p-2 w-full rounded-lg outline-none text-sm text-gray-300 font-medium' style={{backgroundColor:'var(--purple-gray)'}} />
          </div>
          <div className='w-full'>
            <h3 className='font-bold mb-1 text-sm'>Password</h3>
            <input type="text" placeholder='Password' className='p-2 w-full rounded-lg outline-none text-sm text-gray-300 font-medium' style={{backgroundColor:'var(--purple-gray)'}} />
          </div>
          <div className='w-full py-3'>
            <Link to='/user' className='button_1'>Login</Link>
            <Link to='/' className='button_1 my-3'>Back</Link>
          </div>
          <h2 className='text-sm sm:text-base'>Don't have an account? <Link to='/signup'><span>Signup here</span></Link></h2>
        </form>
      </div>
    </section>
  )
}

export default Login