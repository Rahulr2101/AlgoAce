import React from "react";
import Nav from "@components/togglenav";
import { useState } from "react";
import { hints } from "@app/api/problems/hint";
import { TypeAnimation } from 'react-type-animation';
import { Star } from "lucide-react"

const QuestionPanel = ({ problemID, question, setpage, page }) => {
  const difficultyClasses = {
    Easy: "bg-green-500 text-black",
    Medium: "bg-yellow-500 text-black",
    Hard: "bg-red-500 text-black",
  };
  const [hint, setHint] = useState("");
  const [rating, setRating] = useState(0)
  const examples = Array.isArray(question.examples) ? question.examples : [];
  const constraints = Array.isArray(question.constraints) ? question.constraints : [];
  const getHints = async()=>{
    hints(question.description).then((data)=>{
      console.log(data)
      setHint(data.data)
    })
  }

  return (
    <div className="flex flex-col gap-3 px-2 py-2 rounded-lg">
      <Nav page={page} setpage={setpage} />
      <h1 className="text-2xl font-semibold font-serif ">{question.title}</h1>
      <div
        className={`w-min rounded-lg text-center px-1 ${difficultyClasses[question.difficulty]} bg-gray-200`}
      >
        {question.difficulty}
      </div>
      <p className="text-md font-montserrat">{question.description}</p>

      {examples.length > 0 && (
        <div className="mt-4 ">
          {examples.map((example, index) => (
            <div key={index}>
              <h2 className="text-md font-semibold pt-2 pb-2">Examples {index + 1}</h2>
              <div className="border border-slate-500 rounded-2xl p-2 mb-2 bg-slate-600 break-words">
                <div className="font-bold">Input:</div>
                <pre className="whitespace-pre-wrap">{example.input}</pre>
                <div className="font-bold">Output:</div>
                <pre className="whitespace-pre-wrap">{example.output}</pre>
              </div>
            </div>
          ))}
        </div>
      )}

      {constraints.length > 0 && (
        <div className="mt-4">
          <h2 className="text-md font-semibold pt-2 pb-2">Constraints:</h2>
          <ul className="p-2 mb-2 list-disc pl-5">
            {constraints.map((constraint, index) => (
              <li key={index}>{constraint}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <button className="border-[0.1px] border-yellow-500 rounded-xl p-2 flex gap-2 items-center justify-center" onClick={()=>getHints()}>
          <img src="/assets/icon/light_bulb.png" alt="light_buble" height={18} width={18} />
          <h1 className="text-lg text-center text-slate-300 font-thin" >Take Hint</h1>
        </button>
      </div>
      <div className="">
        {hint ? (
          <div className="flex flex-col p-2 space-y-2 shadow-2xl bg-slate-600 rounded-xl ">
           <div className="mb-2">
           <div><h1 className="text-xl font-bold ">Hint</h1></div>
           <TypeAnimation sequence={[hint]} speed={50}  />
           </div>
            <div className="mt-4 pt-4 border-t border-gray-400">
              <p className="text-sm text-white mb-2">Was this hint helpful?</p>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`focus:outline-none ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  >
                    <Star className="w-6 h-6 fill-current" />
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-end justify-end">
            <div>Powered By </div>
            <img src='/assets/images/gemini.gif' alt="gemini" className="w-20 h-10 object-cover" />
            </div>
           
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default QuestionPanel;