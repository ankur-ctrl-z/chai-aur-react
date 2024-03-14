import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        transition: "background-color 200ms",
        backgroundColor: color,
      }}
    >
      <div
        style={{
          position: "fixed",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          bottom: "12px",
          left: "0",
          right: "0",
          padding: "0 2px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "3px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            backgroundColor: "white",
            padding: "8px",
            borderRadius: "12px",
          }}
        >
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

