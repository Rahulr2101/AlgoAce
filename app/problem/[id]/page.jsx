"use client";
import React, { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Editor from "@components/codeEditor";
import QuestionPanel from "@components/questionPanel";
import Chat from "@components/chat";
import Link from "next/link";
import { judge } from "../../api/problems/judge";
import OutputConsole from "@components/output";
import { getQuestion } from "@app/api/problems/problems";
import LoadingScreen from "@components/loadingScreen";
import { motion, AnimatePresence } from "framer-motion";

const Page = ({ params }) => {
  const [value, setValue] = useState("print('Hello World');");
  const [page, setPage] = useState(0);
  const uniqueKeyRef = useRef("");
  const [compiler, setCompiler] = useState("python-3.9.7");
  const [output, setOutput] = useState("");
  const [question, setQuestion] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuestion(params.id).then((data) => {
      setQuestion(data);
      console.log(data);
      setTimeout(() => setLoading(false), 600);
    });
  }, [params.id]);

  const runCode = async () => {
    const newUniqueKey = uuidv4();
    uniqueKeyRef.current = newUniqueKey;
    console.log("code submit", value, uniqueKeyRef.current);
    judge(value, params.id, newUniqueKey, value, compiler).then((res) => {
      console.log(res);
      setOutput(res);
    });
  };

  return (
    <div className="w-full flex flex-col min-h-screen">
      {loading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center min-h-screen"
        >
          <LoadingScreen />
        </motion.div>
      ) : (
        <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col not-sr-only"
          >
          <div className="flex bg-slate-950 justify-between p-2 items-center">
            <Link href="/">
              <div className="md:text-3xl text-2xl font-normal">
                <span className="text-green-700 font-bold">
                  &lt;<span className="text-orange-600 font-normal">/</span>&gt;
                </span>
                AlgoAce
              </div>
            </Link>
            <div className="flex gap-2 rounded-md p-2 px-1 py-2">
              <button
                className="text-white border-2 border-accent flex flex-row rounded-md px-3 py-1 justify-center bg-accent items-center gap-3 hover:bg-transparent hover:text-accent"
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
            <div className="flex flex-row items-center gap-2 text-slate-500 p-2">
              <img src={"https://avatar.iran.liara.run/public"} className="w-12 rounded-2xl" />
              <h1>Hi, Rahul Rajesh Kumar</h1>
            </div>
          </div>

          <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-3 p-2">
            <div className="flex flex-col h-full">
              {page === 0 ? (
                <QuestionPanel
                  problemID={params.id}
                  question={question}
                  setpage={setPage}
                  page={page}
                />
              ) : (
                <Chat setpage={setPage} page={page} />
              )}
            </div>
            <div className="bg-slate-900 p-2 flex flex-col h-full">
              <Editor
                className="flex-grow"
                compiler={compiler}
                setCompiler={setCompiler}
                setValue={setValue}
                value={value}
              />
              {output && <OutputConsole data={output} />}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Page;
