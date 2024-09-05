import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from '@lezer/highlight';
import { javascript } from "@codemirror/lang-javascript";
import { useState } from "react";

const CodeEditor = () => {
    const [value, setValue] = useState("console.log('hello world!');");
    const onChange = React.useCallback((val, viewUpdate) => {
      console.log("val:", val);
      setValue(val);
    }, []);
  const myTheme = createTheme({
    theme: "light",
    settings: {
      background: "#ffffff",
      backgroundImage: "",
      foreground: "#4D4D4C",
      caret: "#AEAFAD",
      selection: "#D6D6D6",
      selectionMatch: "#D6D6D6",
      gutterBackground: "#FFFFFF",
      gutterForeground: "#4D4D4C",
      gutterBorder: "#dddddd",
      gutterActiveForeground: "",
      lineHighlight: "#EFEFEF",
    },
    styles: [
      { tag: t.comment, color: "#787b80" },
      { tag: t.definition(t.typeName), color: "#194a7b" },
      { tag: t.typeName, color: "#194a7b" },
      { tag: t.tagName, color: "#008a02" },
      { tag: t.variableName, color: "#1a00db" },
    ],
  });
  return (
    <div>
      <CodeMirror
        value={value}
        height="200px"
    
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
    </div>
  );
};

export default CodeEditor;
