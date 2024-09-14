import React from 'react'

const togglenav = (props) => {
    
  return (
    <div className='flex flex-row gap-4 ' >
      <div className='border-r pr-2 cursor-pointer' onClick={()=>{props.setpage(0); console.log("hello")}}>Problems</div>
      <div className='cursor-pointer flex gap-1 ' onClick={()=>{props.setpage(1)}}>AlgoAI<img src='/assets/icon/ai.svg' height={15} width={15}/></div>
    </div>
  )
}

export default togglenav
