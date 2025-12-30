from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ----- Models -----

class Pipeline(BaseModel):
    nodes: List[Dict]
    edges: List[Dict]

# ----- Routes -----

@app.get("/")
def read_root():
    return {"status": "Backend running"}

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    nodes = pipeline.nodes
    edges = pipeline.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Build graph for DAG check
    graph = {}
    indegree = {}

    for node in nodes:
        graph[node["id"]] = []
        indegree[node["id"]] = 0

    for edge in edges:
        source = edge["source"]
        target = edge["target"]
        graph[source].append(target)
        indegree[target] += 1

    # Kahn's Algorithm (DAG detection)
    queue = [n for n in indegree if indegree[n] == 0]
    visited = 0

    while queue:
        current = queue.pop(0)
        visited += 1
        for neighbor in graph[current]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    is_dag = visited == num_nodes

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }
