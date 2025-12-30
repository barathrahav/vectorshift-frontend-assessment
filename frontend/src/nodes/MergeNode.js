import { BaseNode } from "./BaseNode";

export const MergeNode = ({ id }) => {
  return (
    <BaseNode
      title="Merge"
      inputs={[`${id}-a`, `${id}-b`]}
      outputs={[`${id}-out`]}
    >
      <span>Merges inputs</span>
    </BaseNode>
  );
};
