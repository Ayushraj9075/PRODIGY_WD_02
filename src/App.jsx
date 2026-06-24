import { useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const addEmployee = () => {
    if (!name || !position) return;

    setEmployees([
      ...employees,
      {
        id: Date.now(),
        name,
        position,
      },
    ]);

    setName("");
    setPosition("");
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        Employee Management System
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
          }}
        />

        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
          }}
        />

        <button
          onClick={addEmployee}
          style={{
            padding: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Add Employee
        </button>
      </div>

      <ul style={{ marginTop: "20px", padding: 0 }}>
        {employees.map((emp) => (
          <li
            key={emp.id}
            style={{
              listStyle: "none",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <span>
              {emp.name} - {emp.position}
            </span>

            <button
              onClick={() => deleteEmployee(emp.id)}
              style={{
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;