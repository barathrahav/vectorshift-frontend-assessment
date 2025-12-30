// submit.js

import { useStore } from "./store";

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/pipelines/parse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nodes, edges }),
        }
      );

      const data = await response.json();

      alert(
        `Pipeline Summary\n\nNodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nIs DAG: ${
          data.is_dag ? "Yes ✅" : "No ❌"
        }`
      );
    } catch (error) {
      console.error(error);
      alert("Failed to submit pipeline");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
