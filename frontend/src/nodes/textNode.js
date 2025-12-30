// textNode.js

import { useState, useRef, useEffect } from "react";
import { BaseNode } from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const textareaRef = useRef(null);
  const regex = /{{\s*([a-zA-Z_$][\w$]*)\s*}}/g;
const matches = [...currText.matchAll(regex)];
const variables = [...new Set(matches.map(m => m[1]))];

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [currText]);

  return (
    <BaseNode
  title="Text"
  inputs={variables}
  outputs={[`${id}-output`]}
>
      <label>
        Text:
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};
