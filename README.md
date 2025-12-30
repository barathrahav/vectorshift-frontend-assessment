# VectorShift Frontend Technical Assessment

This repository contains my solution for the VectorShift Frontend Technical Assessment.
The project demonstrates scalable node abstraction, dynamic UI behavior, backend integration, and clean architecture for a no-code style pipeline builder.

---

## 📁 Project Structure
```
.
├── frontend/
│   ├── src/
│   │   ├── nodes/          # BaseNode + all custom nodes
│   │   ├── submit.js       # Submit pipeline to backend
│   │   ├── ui.js           # ReactFlow canvas
│   │   └── store.js        # Zustand state store
│   └── package.json
│
├── backend/
│   ├── main.py             # FastAPI backend (DAG validation)
│   └── venv/               # Python virtual environment
│
└── README.md
```
---

## 🚀 Features Implemented
### ✅ Part 1: Node Abstraction
- Introduced a reusable BaseNode component to eliminate duplication.
- All nodes define only:
    - title
    - inputs
    - outputs
    - body content
- Added 5 new nodes (Number, Condition, Delay, API, Merge) to demonstrate scalability.

### ✅ Part 2: Styling
- Applied unified styling across all nodes.
- Consistent layout, spacing, and handle appearance.
- Designed to resemble a clean no-code editor interface.

### ✅ Part 3: Text Node Logic
- TextNode automatically resizes based on content.
- Supports dynamic variables using {{variableName}}.
- Each variable dynamically creates a new input handle.

### ✅ Part 4: Backend Integration
- Frontend submits pipeline nodes and edges to backend.
- Backend:
    - Counts number of nodes and edges
    - Validates whether the pipeline is a Directed Acyclic Graph (DAG) using Kahn’s algorithm
    - Frontend displays results in a user-friendly alert.
    - Proper CORS handling added for local development.

---

### 🖥️ Running the Project Locally
**Frontend**
```
cd frontend
npm install
npm start 
```
- Runs at: http://localhost:3000

**Backend**
```
cd backend
py -m venv venv
.\venv\Scripts\activate
pip install fastapi uvicorn python-multipart
py -m uvicorn main:app --reload
```
- Runs at: http://127.0.0.1:8000
- Swagger Docs: http://127.0.0.1:8000/docs

---

🔄 Submitting a Pipeline

- Drag and connect nodes in the UI
- Click Submit
- Backend returns:
    - Number of nodes
    - Number of edges
    - Whether the graph is a DAG
- Results are shown via alert in the UI

---

🧠 Design Decisions

- BaseNode abstraction ensures scalability and maintainability as node types grow.
- Logic and layout responsibilities are clearly separated.
- Minimal but expressive UI to prioritize clarity.
- Backend kept intentionally simple and readable.

---

🎥 Screen Recording

A short screen recording walkthrough is included, covering:
- Node creation and connections
- TextNode dynamic behavior
- BaseNode abstraction
- Backend integration and DAG validation

---

✅ Summary

This solution focuses on:
- Clean abstraction
- Extensibility
- Realistic no-code builder behavior
- Clear frontend–backend communication

Thank you for the opportunity to complete this assessment.

— Barath Rahav