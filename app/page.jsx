"use client";
import React, { useEffect, useState } from "react";
import { getAlgoQuestions } from "@app/api/problems/problems";
import Link from 'next/link';
import {CheckboxLabel} from "@components/checkBoxLabel";



const Page = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    getAlgoQuestions().then((res) => {
      console.log(res.data);
      setProblems(res.data);

    });
  }, []);

  const difficultyClasses = {
    Easy: "text-green-500",
    Medium: "text-yellow-500",
    Hard: "text-red-500",
  };

  return (
    <div className="flex flex-col  ">
      <div className="  bg-dark-secondary h-36 flex items-center p-4 "><h1 className="text-2xl font-normal">Sorting</h1></div>
    <div className="flex flex-row  justify-center gap-10  p-4">
      <div className="flex flex-col items-center gap-4">
        {problems.map((problem, index) => (
          <Link href={`/problem/${problem._id}`} key={index}>
              <div className=" flex items-center bg-secondary p-4 rounded-2xl h-28 shadow-md w-[600px] ">
                <div className="flex flex-grow flex-row justify-between items-center gap-2">
                  <div>
                  <h2 className="text-xl  mb-2  font-normal font-body">{problem.title}</h2>
                  <p className="text-sm font-normal "><span className={`text-center ${difficultyClasses[problem.difficulty]}`}>{problem.difficulty}</span>, Array</p>
                  </div>

                  <button className=" bg-transparent border-[0.1px] w-32 h-12 rounded-2xl border-white hover:bg-accent">
                   <h1 className="font-thin"> Solve Challenge</h1> 
                  </button>
                
                </div>
              </div>
          
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <h1 className="text-slate-300 text-xl">STATUS</h1>
        <CheckboxLabel text={"Solved"}/>
        <CheckboxLabel text={"Unsolved"}/>
        </div>
        <div className="border-[0.0001px] border-slate-400"></div>
        <div className="space-y-2">
          <h1 className="text-slate-300 text-xl">DIFFICULTY</h1>
          <CheckboxLabel text={"Easy"}/>
        <CheckboxLabel text={"Medium"}/>
        <CheckboxLabel text={"Hard"}/>
       
        </div>
       
      </div>
    </div>
    </div>
  );
};

export default Page;
