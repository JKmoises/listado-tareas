import { useState } from "react";
import { InputTask } from "./components/InputTask";
import { TaskList } from "./components/TaskList";

const initialTasks = [];

function App() {
  const [tasks, setTask] = useState(initialTasks);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createTask = (data) => {
    data.id = Date.now();
    setTask([...tasks, data]);
  }

  const updateTask = (data) => {

  }

  const deleteTask = (id) => {

  }

  return (
    <div className="container section">
      <h1 className="section-title">Listado de tareas</h1>
      <InputTask createTask={createTask} updateTask={updateTask} />
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
