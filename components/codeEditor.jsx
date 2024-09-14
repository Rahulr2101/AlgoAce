import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import { abcdef } from '@uiw/codemirror-theme-abcdef';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CodeEditor = ({ setValue, value, compiler, setCompiler }) => {
  const onChange = React.useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);

  const [editorLanguage, setEditorLanguage] = useState([python()]);

  const handleLanguageChange = (val) => {
    setCompiler(val);
    switch (val) {
      case "python-3.9.7":
        setEditorLanguage([python()]);
        break;
      case "gcc-4.9":
        setEditorLanguage([cpp()]);
        break;
      case "java":
        setEditorLanguage([java()]);
        break;
    }
  };

 

  return (
    <div className="flex flex-col">
      <div className=" flex flex-col p-2 rounded-t-lg gap-1">
        <div>
          <span className="text-green-600 font-bold whitespace-nowrap flex-nowrap">
            &lt;<span className="font-normal">/</span>
          </span>
          <span className="font-montserrat ">Code</span>
          <span className="text-green-600 font-bold">&gt;</span>
        </div>
        <div className="bg-transparent">
          <Select onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="python-3.9.7">Python</SelectItem>
              <SelectItem value="gcc-4.9">GCC</SelectItem>
              <SelectItem value="g++-4.9">G++</SelectItem>
              <SelectItem value="openjdk-11">Java</SelectItem>
              <SelectItem value="php-8.1">PHP</SelectItem>
              <SelectItem value="haskell-9.2.7">Haskell</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <CodeMirror
        className="w-full"
        value={value}
        height="600px"
        extensions={editorLanguage}
        theme={abcdef} // Apply the updated theme here
        onChange={onChange}
      />
    </div>
  );
};

export default CodeEditor;
