import React,{ useState } from 'react'
import { motion } from 'framer-motion';
import { CgMenuGridO, CgClose } from "react-icons/cg";
import ChooseLang from './body-sections/ChooseLang';
import Quiz from './body-sections/Quiz';
import Profile from './body-sections/Profile';
import { useNavigate } from 'react-router-dom';

const HOST = process.env.REACT_APP_HOST

const Body = () => {
 
  const navigate = useNavigate()

  const [quiz,setQuiz] = useState(false);
  const [toggle,setToggle] = useState(false)
  const [profile,setProfile] = useState(false)

  const [questions,setQuestions] = useState([])
  const [userAnswer,setUserAnswer] = useState([])

  const handleProfile = async () => {
    if(quiz){
      let temp = window.confirm("Do you want to end this quiz?")
      console.log(temp)
      if(temp){
        await handleSubmit()
        setQuiz(false)
      }else return;
    }
    setProfile(true);
  }

  const handleDashboard = async () => {
    if(quiz){
      let temp = window.confirm("Do you want to end this quiz?")
      if(temp){
        await handleSubmit()
        setQuiz(false)
      }else return;
    }
    setProfile(false);
  }

  const handleSubmit = async () => {
    console.log(userAnswer)
    const response = await fetch(`${HOST}/profile/submit`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'authToken': localStorage.getItem('langLearnAT')
      },
      body:JSON.stringify({userAnswer})
    })
    const data = await response.json();
    if('error' in data){
      window.alert(data.error)
    }else{
      window.alert(`You have answered ${data.correct} questions correctly`)
      setQuiz(false)
      setProfile(true)
      setUserAnswer([])
    }
  }
  
  const handleLogout = () => {
    localStorage.removeItem('langLearnAT')
    navigate('/')
  }

  return (
    <section className='main_container_1 flex_center sm:flex-row flex-col'>
      {/* desktop and tablet menu */}
      <div className=' flex_between mobile_hide flex-col w-64 h-5/6'>
        <h2 className='heading_2'>LangLearn</h2>
        <div className='w-full h-fit flex_between flex-col'>
          <button onClick={()=>{handleDashboard()}} className='button_3 mb-5'>Dashboard</button>
          <button onClick={()=>{handleProfile()}} className='button_3'>Profile</button>
        </div>
        <button onClick={handleLogout} className='button_3'>Logout</button>
      </div>
      {/* mobile menu */}
      <div className='flex_between w-full h-20 px-7 sm:hidden'>
        <h2 className='heading_2'>LangLearn</h2>
        <CgMenuGridO onClick={()=>{setToggle(true)}} className='text-3xl cursor-pointer text-gray-500 hover:text-gray-700' />
        {toggle && (<motion.div
          whileInView={{ x: [200, 0] }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className='fixed top-0 bottom-0 right-0 z-10 p-4 w-3/4 h-screen flex_evenly flex-col bg-white'
        >
          <CgClose onClick={()=>{setToggle(false)}} className='text-3xl cursor-pointer text-gray-600' />
          <div className='main_container_2 flex_evenly flex-col shadow-inner'>
            <div className='w-full h-fit flex_between flex-col'>
              <button onClick={()=>{handleDashboard()}} className='button_3 mb-5'>Dashboard</button>
              <button onClick={()=>{handleProfile()}} className='button_3'>Profile</button>
            </div>
            <button onClick={handleLogout} className='button_3'>Logout</button>
          </div>
          </motion.div>)}
      </div>
      {!quiz && !profile && <ChooseLang setQuiz={setQuiz} setQuestions={setQuestions}/>}
      {quiz && !profile && <Quiz question={questions} setUserAnswer={setUserAnswer} userAnswer={userAnswer} handleSubmit={handleSubmit}/>}
      {profile && !quiz && <Profile/>}
      
    </section>
  )
}

export default Body