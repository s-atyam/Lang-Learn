import React from 'react'

const Option = ({optChar,text})=>{
  return (
    <div className='w-full min-h-24 my-2 border-2 border-slate-400 flex_between cursor-pointer hover:bg-slate-400'>
      <span className='h-10 w-12 mx-2 rounded-full font-bold flex_center' style={{backgroundColor:'var(--purple-gray)'}}>{optChar}</span>
      <p className='h-20 w-full flex justify-start items-center font-medium text-sm px-2'>{text}</p>
    </div>
)}

const Quiz = (props) => {
  return (
    <div className='flex_evenly w-full h-full flex-col' style={{backgroundColor:'var(--light-gray-color)'}}>
       <p className='para_1'>Question 2 of 10</p>
       <h2 className='heading_3 mx-8'>3. What is your name?</h2>
       <div className='main_container_fit border'>
         <Option optChar='A' text='Option A is correct'/>
         <Option optChar='B' text='Option B is correct'/>
         <Option optChar='C' text='Option C is correct'/>
         <Option optChar='D' text='Option D is correct'/>
       </div>
       <div>
        <button className='button_2'>Next</button>
        <button className='button_2'>Submit</button>
       </div>
    </div>
  )
}

export default Quiz