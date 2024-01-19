import React from 'react'
import { motion } from 'framer-motion';
import homeImage from '../assets/images/painting.jpg'
import { Link } from "react-router-dom";

const Homepage = () => {  

  return (
    <>
        <div className='main_container_1 flex_center flex-col'>
            {/* Navbar */}
            <div className='flex_between w-full md:w-4/5 h-16'>
                <h1 className='heading_2 ml-8' style={{color:'var(--purple)',fontWeight:'700'}}>Lang Learn</h1>
                <div className='flex_between h-full w-fit'>
                    <Link to='/signup' className='button_1'>Signup</Link>
                    <Link to='/login' className='button_1'>Login</Link>
                </div>
            </div>
            {/* Homepage Content */}
            <div className='flex_center h-full w-full flex-col-reverse md:flex-row'>
                <div className='main_container_3 flex_center flex-col'>
                    <motion.h1 className='heading_1 w-full'
                        whileInView={{ y: [100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                    >Your Gateway to <br/> <span>Multilingual Mastery</span>
                    </motion.h1>
                    <motion.p className='para_1 my-6'
                        whileInView={{ y: [100, 0], opacity: [0, 1] }}
                        transition={{ duration: 1 }}
                    >
                        Embark on a journey to enhance your language proficiency with <span>Lang Learn</span>. Whether you're a beginner or looking to refine your skills, our interactive and personalized exercises cater to your learning pace.
                    </motion.p>
                    <motion.div className='w-full py-1'
                        whileInView={{ y: [50, 0], opacity: [0, 1] }}
                        transition={{ duration: 1 }}
                    >
                        <Link to='/signup' className='button_2'>Get Started</Link>
                    </motion.div>
                </div>
                <div className='main_container_3 flex_center'>
                    <motion.img src={homeImage} alt='image' className='rounded-md'
                        whileInView={{ y: [100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default Homepage