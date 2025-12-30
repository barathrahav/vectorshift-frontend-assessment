import { BaseNode } from "./BaseNode";

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      title="Condition"
      inputs={[`${id}-input`]}
      outputs={[`${id}-true`, `${id}-false`]}
    >
      <span>If / Else logic</span>
    </BaseNode>
  );
};
