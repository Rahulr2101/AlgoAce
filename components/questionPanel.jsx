import React from "react";
import Nav from "@components/togglenav";

const QuestionPanel = ({ problemID, question, setpage, page }) => {
  const difficultyClasses = {
    Easy: "bg-green-500",
    Medium: "bg-yellow-500",
    Hard: "bg-red-500",
  };

  const examples = Array.isArray(question.examples) ? question.examples : [];
  const constraints = Array.isArray(question.constraints) ? question.constraints : [];

  return (
    <div className="flex flex-col gap-3 px-2 py-2 rounded-lg">
      <Nav page={page} setpage={setpage} />
      <h1 className="text-2xl font-semibold font-serif ">{question.title}</h1>
      <div
        className={`w-12 rounded-lg text-center ${difficultyClasses[question.difficulty]} bg-gray-200`}
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
    </div>
  );
};

export default QuestionPanel;
