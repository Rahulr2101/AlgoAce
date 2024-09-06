import React from "react";
import { getQuestion } from "@app/api/problems/problems";
import { useEffect } from "react";
import Nav from "@components/togglenav";

const QuestionPanel = (props ) => {
  const [question, setQuestion] = React.useState({});
  useEffect(() => {
    getQuestion().then((data) => {
      setQuestion(data);
    });
  }, []);

  const difficultyClasses = {
    easy: "bg-green-200",
    medium: "bg-yellow-200",
    hard: "bg-red-200",
  };


  const examples = Array.isArray(question.examples) ? question.examples : [];
  const constraints = Array.isArray(question.constraints)
    ? question.constraints
    : [];

  return (
    <div className="flex flex-col bg-white gap-3 px-2 py-2 rounded-lg">
      <Nav page = {props.page} setpage = {props.setpage} />
      <h1 className="text-2xl font-semibold font-serif ">{question.title}</h1>
      <div
        className={` w-12 rounded-lg text-center ${
          difficultyClasses[question.difficulty]
        } bg-gray-200`}
      >
        {question.difficulty}
      </div>
      <p className=" text-md font-montserrat">{question.description}</p>

      {examples.length > 0 && (
        <div className="mt-4">
          {examples.map((examples, index) => (
            <div>
              <h2 className="text-md font-semibold pt-2 pb-2">
                Examples {index + 1}
              </h2>
              <div className="border rounded p-2 mb-2 bg-slate-100">
                <div className="font-bold ">Input:</div>
                <pre>{examples.input}</pre>
                <div className="font-bold">Output:</div>
                <pre>{examples.output}</pre>
              </div>
            </div>
          ))}
        </div>
      )}

      {examples.length > 0 && (
        <div className="mt-4">
          <h2 className="text-md font-semibold pt-2 pb-2 ">Constraints:</h2>
          <ul className="p-2 mb-2 list-disc pl-5">
            {constraints.map((examples, index) => (
              <li className="">{examples}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuestionPanel;
