import React, { useRef, useState } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js';

const initialForm = {
  id: null,
  name: "",
  state: false
};


export const TaskInput = ({ createTask }) => {
  const [form, setForm] = useState(initialForm);

  const refInput = useRef();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleTask = () => {
    if (form.name === "") {
      Swal.fire({
        title: "No has agregado una tarea",
        text: "Debes agregar una tarea",
        timer: 3000,
        icon: "error",
      });
      return;
    }

    if (form.name.length > 25) {
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

    createTask(form);
    resetTask();
    refInput.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key !== 'Enter') return;

    e.preventDefault();
    if (form.name === "") {
       Swal.fire({
         title: "No has agregado una tarea",
         text: "Debes agregar una tarea",
         icon: "error",
         timer: 3000
       });
      return;
    }

    if (form.name.length > 25) {
      Swal.fire({
        title: "La descripción de la tarea es muy larga",
        text: "La tarea debe tener hasta 25 caracteres",
        icon: "info",
        timer: 3000,
        customClass: {
          title: "fs-21",
        },
      });
      return;
    }

    createTask(form);
    resetTask();
  };


  const resetTask = () => {
    setForm(initialForm);
  }

  const taskValidations = () => {

  };

  return (
    <div className="input-task-container">
      <input
        ref={refInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="input-task"
        type="text"
        name="name"
        value={form.name}
      />
      <button onClick={handleTask} className="btn-task">
        Crear Tarea
      </button>
    </div>
  );
};
