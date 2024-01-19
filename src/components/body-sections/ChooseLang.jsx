import React from 'react'
import { motion } from 'framer-motion';
import eng_img from '../../assets/images/english.png'
import hindi_img from '../../assets/images/hindi.png'

const HOST = process.env.REACT_APP_HOST

const ChooseLang = (props) => {
  const {setQuiz, setQuestions} = props
  const langSelect = async (language) => {
    const authToken = localStorage.getItem('langLearnAT');

    const response = await fetch(`${HOST}/profile/questions/${language}`,{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        'authToken': authToken,
      }
    })
    const data = await response.json();

    if('error' in data){
      console.log(data.error)
      return
    }else{
      setQuestions(JSON.parse(data.questions))
      setQuiz(true);
    }
  }

  return (
    <div className='flex_evenly w-full h-full flex-col' style={{backgroundColor:'var(--light-gray-color)'}}>
        <h1 className='heading_2'>Choose your language for Quiz</h1>
        <div className='flex_between w-2/3 h-2/3 px-10 flex-wrap flex-col sm:flex-row'>
          <motion.div className='flex_between flex-col cursor-pointer p-2 rounded'
            style={{backgroundColor:'var(--cloud)'}}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            onClick={()=>{langSelect('english')}}
          >
            <h2 className='heading_2'>English</h2>
            <img className='w-28 lg:w-48 mt-5' src={eng_img} alt='English'></img>
          </motion.div>
          <motion.div className='flex_between flex-col cursor-pointer mb-8 sm:mb-0 p-2 rounded'
            style={{backgroundColor:'var(--cloud)'}}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            onClick={()=>{langSelect('hindi')}}
          >
            <h2 className='heading_2'>Hindi</h2>
            <img className='w-28 lg:w-48' src={hindi_img} alt='Hindi'></img>
          </motion.div>
        </div>
    </div>
  )
}

export default ChooseLang