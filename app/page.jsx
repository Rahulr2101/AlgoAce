"use client";

import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useState } from 'react';

const Home = () => {
  const [value, setValue] = useState("console.log('hello world!');");
  const onChange = React.useCallback((val, viewUpdate) => {
    console.log('val:', val);
    setValue(val);
  }, []);
  return (
  <div className='w-full bg-slate-50'>
    <div className='flex justify-between p-1 items-center'>
      <div className='flex gap-1'>
      <img alt="logo" src='assets/images/logo.svg' height={50} width={50} />
      <h1 className='max-sm:hidden font-satoshi font-semibold text-lg text-black tracking-wide'>AlgoAce</h1>
      </div>
      
      <div className='flex gap-2 bg-slate-100 rounded-md p-2 px-1 '>
      <div className='flex items-center  bg-slate-200 rounded-md px-2'>
      <img src='assets/images/upload.svg'  alt ='upload' height={20} width={20} />
      <button type='button' className='text-green-600 font-medium rounded-lg w-20 h-6'>
        Submit</button>
      </div>
      <div className='flex items-center  bg-slate-200 px-2 rounded-md gap-1 '>
        <img src="assets/images/play.svg" alt='run' height={15} width={15} /> 
      <button className='font-thin'>Run</button>
      </div>
     
      </div>
      <div className='flex flex-row gap-2'>
        <h1 className='text-slate-400'>Register</h1>
        <h1 className='text-slate-400'>SignIn</h1>
      </div>
    </div>
    <div className='grid grid-cols-2 gap-3'>
      <div className='bg-white'>

      </div>
    <CodeMirror value={value} height="200px" extensions={[javascript({ jsx: true })]} onChange={onChange} />
    </div>
 
 <p>hello</p>
  </div>
  
 );
}
export default Home;
