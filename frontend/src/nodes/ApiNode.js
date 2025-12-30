import { BaseNode } from "./BaseNode";

export const ApiNode = ({ id }) => {
  return (
    <BaseNode
      title="API Call"
      inputs={[`${id}-payload`]}
      outputs={[`${id}-response`]}
    >
      <input type="text" placeholder="API URL" />
    </BaseNode>
  );
};
