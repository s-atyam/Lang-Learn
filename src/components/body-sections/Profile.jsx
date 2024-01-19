import React from 'react'
import dp from '../../assets/images/profile.png'

const CircularProgress = ({percentage, color}) => {
  return(
    <div className='m-4 w-40 h-40 rounded-full flex_center' style={{background:`conic-gradient(${color} 0% ${percentage}%, transparent ${percentage}% 100%)`,boxShadow: '5px 5px 15px #a2a2a2,-5px -5px 15px #dcdcdc'}}>
      <h1 className='heading_2 w-36 h-36 rounded-full flex_center' style={{backgroundColor:'var(--light-gray-color)',boxShadow: 'inset 5px 5px 15px #a2a2a2,inset -5px -5px 15px #dcdcdc'}}>{percentage}%</h1>
    </div>
  )
}

const HorizontalProgress = ({percentage, color}) => {
  return (
    <div className='my-2 rounded-xl h-2 w-4/5' style={{boxShadow: '5px 5px 10px #a2a2a2,-5px -5px 10px #dcdcdc'}}><div className='rounded-lg h-full ' style={{width:`${percentage}%`,backgroundColor:`${color}`}}></div></div>
  )
}

const Profile = () => {
  return (
    <div className='flex_center w-full h-full flex-col' style={{backgroundColor:'var(--light-gray-color)'}}>
      <div className='w-full h-fit flex-grow md:flex-grow-0  md:h-2/5 flex_center flex-col md:flex-row'>
        
        <div className='w-52 h-52 p-2 my-5 mx-12 rounded-xl bg-white' style={{boxShadow: '5px 5px 10px #a2a2a2,-5px -5px 10px #dcdcdc'}}><img className='w-full h-full rounded-md' src={dp} alt='dp'/></div>
        
        <div className=' flex items-center justify-between h-fit md:h-1/2 flex-col w-4/5'>
          <div className='w-full'>
            <h1 className='heading_2 text-center md:text-start'>John Wills</h1>
            <p className='para_1 text-center md:text-start'>Level 12</p>
          </div>
          <p className='w-full para_1'>Total test taken - 2</p>
          <div className='w-full flex md:block flex-col items-center'>
            <p className='para_1 text-center md:text-start'>300/1000xp</p>
            <HorizontalProgress percentage='76' color='#3498db' className='border' />
          </div>
        </div>
        
      </div>
      <div className='w-full h-2/5 flex_evenly flex-grow md:flex-grow-0 flex-wrap'>
        <div className='w-48 h-fit flex_evenly flex-col'>
          <CircularProgress percentage='28' color='#39b530'/>
          <p className='heading_3'>Correct Answered</p>
        </div>
        <div className='w-48 h-fit flex_evenly flex-col'>
          <CircularProgress percentage='48' color='red'/>
          <p className='heading_3'>Wrong Answered</p>
        </div>
        <div className='w-48 h-fit flex_evenly flex-col'>
          <CircularProgress percentage='68' color='#3498db'/>
          <p className='heading_3'>Not Answered</p>
        </div>
      </div>
    </div>
  )
}

export default Profile