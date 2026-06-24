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
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Employee Management System</h1>

      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <button onClick={addEmployee} style={{ marginLeft: "10px" }}>
        Add Employee
      </button>

      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} - {emp.position}
            <button
              onClick={() => deleteEmployee(emp.id)}
              style={{ marginLeft: "10px" }}
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