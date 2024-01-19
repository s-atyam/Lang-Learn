import React,{useState} from 'react'

const Option = ({handleOptionClick,optChar,text,option})=>{
  return (
    <div onClick={()=>{handleOptionClick(optChar)}} className='w-full min-h-24 my-2 border-2 border-slate-400 flex_between cursor-pointer hover:bg-slate-400' style={{backgroundColor: option===optChar?'var(--gray-color)':''}}>
      <span className='h-10 w-12 mx-2 rounded-full font-bold flex_center' style={{backgroundColor:'var(--purple-gray)'}}>{optChar}</span>
      <p className='h-20 w-full flex justify-start items-center font-medium text-sm px-2'>{text}</p>
    </div>
)}

const Quiz = (props) => {
  const {question, setUserAnswer, userAnswer, handleSubmit} = props
  const [currQues,setCurrQuestion] = useState(0)
  const [option,setOption] = useState('')

  const handleOptionClick = (char) => {
    console.log(char)
    setOption(char);
  }
  const handleNext = () => {
    if(option!==''){
      let temp = [...userAnswer]
      temp.push({'questionID':question[currQues]._id,'selectedOption':option})
      setUserAnswer(temp)
    }
    setCurrQuestion(() => {return currQues+1})
    setOption('')
  }

  return (
    <div className='flex_evenly w-full h-full flex-col' style={{backgroundColor:'var(--light-gray-color)'}}>
       <p className='para_1'>Question {currQues+1} of {question.length}</p>
       <h2 className='heading_3 mx-8'>{currQues+1}. {question.at(currQues).text}</h2>
       
       <div className='main_container_fit border'>
        {question.at(currQues).options.map((e)=>{
          return <Option key={e.char} handleOptionClick={handleOptionClick} option={option} optChar={e.char} text={e.text}/>
        })}
       </div>

       <div>
        <button disabled={currQues+1===question.length} onClick={handleNext} className='button_2'>Next</button>
        <button onClick={handleSubmit} className='button_2'>Submit</button>
       </div>
    </div>
  )
}

export default Quiz