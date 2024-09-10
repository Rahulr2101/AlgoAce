"use client";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Editor from "@components/codeEditor";
import QuestionPanel from "@components/questionPanel";
import Chat from "@components/chat";
import Link from "next/link";
import { judge } from "./api/problems/judge";

const Home = () => {
  const [value, setValue] = useState("print('Hello World');");
  const [page, setPage] = useState(0);
  const [isPolling, setIsPolling] = useState(false);
  const [unique, setUnique] = useState("");
  const [output, setOutput] = useState("");
  const runCode = async () => {
    const uniqueKey = uuidv4();
    setUnique(uniqueKey);  
    judge(value, "66dab561b8830c08057a2675",uniqueKey,value).then((res) => {
  
    });
    getSubmission();
    setIsPolling(true);
  };
  const getSubmission = async () => {
    const submission = await fetch("http://localhost:3000/api/submission", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ questionId: "66dab561b8830c08057a2675", unique: unique }),
    });
    const result = await submission.json();
    if (result.data){
      setIsPolling(false);
      console.log(result.data)
      setOutput(result.data.output);
      console.log(result.data.output) 
      console.log(output)
    }
  };


  useEffect(() => {
    let pollingInterval;

    if (isPolling) {
      pollingInterval = setInterval(() =>  {
        getSubmission();
      }, 3000);
    }
    return () => {
      if (pollingInterval) {
        clearInterval(pollingInterval);
      }
    };
  }, [isPolling]);

  return (
    <div className="w-full flex flex-col bg-slate-100 min-h-screen">
      <div className="flex justify-between p-1 items-center">
        <Link href="/">
          <img
            alt="logo"
            src="assets/images/logo.png"
            height={120}
            width={120}
          />
        </Link>

        <div className="flex gap-2 rounded-md p-2 px-1 py-2">
          <div className="flex items-center bg-slate-200 rounded-md py-2 px-2">
            <img
              src="assets/images/upload.svg"
              alt="upload"
              height={20}
              width={20}
            />
            <button
              type="button"
              className="text-green-600 font-medium rounded-lg w-20 h-6"
            >
              Submit
            </button>
          </div>
          <div className="flex items-center bg-slate-200 px-2 py-2 rounded-md gap-1">
            <img
              src="assets/images/play.svg"
              alt="run"
              height={15}
              width={15}
            />
            <button className="font-thin" onClick={runCode}>
              Run
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <h1 className="text-slate-400">Register</h1>
          <h1 className="text-slate-400">SignIn</h1>
        </div>
      </div>
      <div className="flex-grow grid grid-cols-2 gap-3 p-2 h-full">
        {page === 0 ? (
          <QuestionPanel setpage={setPage} page={page} />
        ) : (
          <Chat setpage={setPage} page={page} />
        )}
        <div className="bg-slate-200 p-2 flex flex-col h-full">
        
        <Editor className="h-full" setValue={setValue} value={value} />
          {output !== "" && (
            <div className="">
              <h1 className="text-slate-400">Output</h1>
              <pre className="bg-white p-2 rounded-md border border-gray-300">
                {output}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
