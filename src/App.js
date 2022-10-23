import { useState } from "react";
import { InputTask } from "./components/InputTask";
import { TaskList } from "./components/TaskList";

const initialTasks = [];

function App() {
  const [tasks, setTask] = useState(initialTasks);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createTask = (data) => {
    data.id = crypto.randomUUID();
    setTask([...tasks, data]);
  };

  const updateTask = (data) => {
    console.log(data);
  };

  const updateStateTask = (data) => {
    let newData = tasks.map(task => {
      if (data.id === task.id) {
        if (data.state) {
          task.state = false;
        } else {
          task.state = true;
        }
      }

      return task;
    });
    console.log(newData);
    setTask(newData);
  };

  const deleteTask = (id) => {
    let newData = tasks.filter((task) => task.id !== id);
    setTask(newData);
  };

  return (
    <div className="container section">
      <h1 className="section-title">Listado de tareas</h1>
      <InputTask createTask={createTask} />
      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        updateStateTask={updateStateTask}
      />
    </div>
  );
}

export default App;
