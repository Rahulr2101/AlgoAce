"use client";
import React, { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Editor from "@components/codeEditor";
import QuestionPanel from "@components/questionPanel";
import Chat from "@components/chat";
import Link from "next/link";
import { judge } from "../../api/problems/judge";
import OutputConsole from '@components/output';
import { getQuestion } from "@app/api/problems/problems"; // Import getQuestion function

const Home = ({ params }) => {
  const [value, setValue] = useState("print('Hello World');");
  const [page, setPage] = useState(0);
  const [isPolling, setIsPolling] = useState(false);
  const uniqueKeyRef = useRef("");
  const [compiler, setCompiler] = useState("python-3.9.7");
  const [output, setOutput] = useState("");
  const [question, setQuestion] = useState({});

  // Fetch question data
  useEffect(() => {
    getQuestion(params.id).then((data) => {
      setQuestion(data);
    });
  }, [params.id]);

  const runCode = async () => {
    const newUniqueKey = uuidv4();
    uniqueKeyRef.current = newUniqueKey;
    console.log("code submit", value, uniqueKeyRef.current);
    judge(value, params.id, newUniqueKey, value, compiler).then((res) => {});
    getSubmission(newUniqueKey);
    setIsPolling(true);
  };

  const getSubmission = async (uniqueKey) => {
    const submission = await fetch("http://localhost:3000/api/submission", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ questionId: params.id, unique: uniqueKey }),
    });

    const result = await submission.json();
    if (result.data) {
      setIsPolling(false);
      console.log(result.data);
      setOutput(result.data);
    }
  };

  useEffect(() => {
    let pollingInterval;

    if (isPolling) {
      pollingInterval = setInterval(() => {
        getSubmission(uniqueKeyRef.current);
      }, 3000);
    }
    return () => {
      if (pollingInterval) {
        clearInterval(pollingInterval);
      }
    };
  }, [isPolling]);

  return (
    <div className="w-full flex flex-col min-h-screen">
      <div className="flex bg-slate-950 justify-between p-1 items-center">
        <Link href="/">
          <div className="text-3xl font-normal ">
            <span className="text-green-700 font-bold">&lt;<span className="text-orange-600 font-normal">/</span>&gt;</span>AlgoAce
          </div>
        </Link>

        <div className="flex gap-2 rounded-md p-2 px-1 py-2">
          <div className=" rounded-md gap-1">
            <button
              className=" text-white  border-2 border-accent flex flex-row rounded-md  px-3 py-1 justify-center  bg-accent items-center gap-3 hover:bg-transparent hover:text-accent"
              onClick={runCode}
            >
              <img
                src="/assets/images/play.svg"
                alt="run"
                height={15}
                width={15}
              />
              Execute
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
          <QuestionPanel problemID={params.id} question={question} setpage={setPage} page={page} />
        ) : (
          <Chat setpage={setPage} page={page} />
        )}
        <div className="bg-slate-900 p-2 flex flex-col h-full">
          <Editor className="h-full" compiler={compiler} setCompiler={setCompiler} setValue={setValue} value={value} />
          {output !== "" && (
            <OutputConsole data={output} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
