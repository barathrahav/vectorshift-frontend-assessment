import { BaseNode } from "./BaseNode";

export const NumberNode = ({ id }) => {
  return (
    <BaseNode title="Number" outputs={[`${id}-value`]}>
      <input type="number" placeholder="Enter number" />
    </BaseNode>
  );
};
