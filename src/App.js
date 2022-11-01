import { useState } from "react";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { TaskFilters } from "./components/TaskFilters";

const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];
const initialFilteredTasks = [];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filteredTasks, setFilteredTasks] = useState(initialFilteredTasks);

  const createTask = (data) => {
    data.id = crypto.randomUUID();

    localStorage.setItem("tasks", JSON.stringify([...tasks, data]));

    setTasks([...tasks, data]);
  };

  const deleteTask = (id) => {
    Swal.fire({
      title: "¿Estas segur@ de eliminar esta tarea?",
      text: "¡No podrás revertir esto!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar Tarea",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        let newData = tasks.filter((task) => task.id !== id);

        localStorage.setItem("tasks", JSON.stringify(newData));
        setTasks(newData);

        Swal.fire({
          title: "Tarea Eliminada",
          text: "Tu tarea ha sido eliminada",
          icon: "success",
          timer: 3000,
        });
      }
    });
  };

  const updateStateTask = (data) => {
    let newData = tasks.map((task) => {
      if (data.id === task.id) {
        if (data.state) {
          task.state = false;
        } else {
          task.state = true;
        }
      }

      return task;
    });
    localStorage.setItem("tasks", JSON.stringify(newData));

    setTasks(newData);
  };

  const updateTask = (data) => {
    let newData = tasks.map((task) => (task.id === data.id ? data : task));

    localStorage.setItem("tasks", JSON.stringify(newData));
    setTasks(newData);
  };

  const filterTasks = (filterTask) => {
    let filter,
      stateTask = Boolean(parseInt(filterTask.value));

    if (filterTask.value !== "") {
      filter = tasks.filter((task) => task.state === stateTask);
      
    } else {
      filter = [];
    }
    setFilteredTasks(filter);
    
  };


  return (
    <div className="container section">
      <h1 className="section-title">Listado de tareas</h1>
      <TaskInput createTask={createTask} />

      <TaskFilters filterTasks={filterTasks} tasks={tasks} />

      <TaskList
        tasks={tasks}
        filteredTasks={filteredTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        updateStateTask={updateStateTask}
      />
    </div>
  );
}

export default App;
