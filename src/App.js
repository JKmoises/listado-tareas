import { useState } from "react";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const createTask = (data) => {
    data.id = crypto.randomUUID();
    
    localStorage.setItem("tasks", JSON.stringify([...tasks, data]));

    setTasks([...tasks, data]);
  };

  const deleteTask = (id) => {
    Swal.fire({
      title: '¿Estas segur@ de eliminar esta tarea?',
      text: "¡No podrás revertir esto!",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar Tarea',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        let newData = tasks.filter((task) => task.id !== id);

        localStorage.setItem("tasks", JSON.stringify(newData));
        setTasks(newData);

        Swal.fire(
          'Tarea Eliminada',
          'Tu tarea ha sido eliminada',
          'success'
        )
      }
    })
    
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
    localStorage.setItem("tasks", JSON.stringify(newData));

    setTasks(newData);
  };

  const updateTask = (data) => {
    let newData = tasks.map(task => task.id === data.id ? data : task);

    localStorage.setItem("tasks", JSON.stringify(newData));
    setTasks(newData);
  };



  return (
    <div className="container section">
      <h1 className="section-title">Listado de tareas</h1>
      <TaskInput createTask={createTask} />
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
