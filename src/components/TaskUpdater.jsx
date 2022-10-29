import React, { useState } from 'react'
import Swal from "sweetalert2/dist/sweetalert2.js";

export const TaskUpdater = ({ task, updateTask,setDataToEdit}) => {
  const [taskForm, setTaskForm] = useState(task);
  
  const handleChange = (e) => {
    setTaskForm({
      ...taskForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleKeyDown = (e) => { 
    if (e.key !== "Enter") return;
    e.preventDefault();

    if (taskForm.name === "") {
      Swal.fire({
        title: "No has agregado una tarea",
        text: "Debes agregar una tarea",
        timer: 3000,
        icon: "error",
      });
      return;
    }

    if (taskForm.name.length > 25) {
      Swal.fire({
        title: "La descripción de la tarea es muy larga",
        text: "La tarea debe tener hasta 25 caracteres",
        icon: "info",
        timer: 3000,
        customClass: {
          title: "fs-20-8",
        },
      });
      return;
    }
    handleUpdateTask();

  }
  
  const handleUpdateTask = () => {
    if (taskForm.name === "") {
      Swal.fire({
        title: "No has agregado una tarea",
        text: "Debes agregar una tarea",
        timer: 3000,
        icon: "error",
      });
      return;
    }

    if (taskForm.name.length > 25) {
      Swal.fire({
        title: "La descripción de la tarea es muy larga",
        text: "La tarea debe tener hasta 25 caracteres",
        icon: "info",
        timer: 3000,
        customClass: {
          title: "fs-20-8",
        },
      });
      return;
    }
    
    setDataToEdit(false);
    updateTask(taskForm);
  }

  return (
    <>
      <input
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="input-updater"
        type="text"
        name="name"
        value={taskForm.name}
      />
      <button onClick={handleUpdateTask} className="btn-actualizar">
        Actualizar
      </button>
    </>
  );
};
