import { BaseNode } from "./BaseNode";

export const DelayNode = ({ id }) => {
  return (
    <BaseNode
      title="Delay"
      inputs={[`${id}-in`]}
      outputs={[`${id}-out`]}
    >
      <input type="number" placeholder="Delay (ms)" />
    </BaseNode>
  );
};
