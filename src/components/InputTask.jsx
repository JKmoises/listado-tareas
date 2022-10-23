import React, { useRef, useState } from 'react'

const initialForm = {
  id: null,
  name: "",
  state: false
};


export const InputTask = ({ createTask }) => {
  const [form, setForm] = useState(initialForm);

  const refInput = useRef();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleTask = (e) => {
    if (form.name === "") {
      window.alert("Debes agregar una tarea");
      return;
    }

    createTask(form);
    resetTask();
    refInput.current.focus();
  };

  const resetTask = () => {
    setForm(initialForm);
  }

  return (
    <div className="input-task-container">
      <input
        ref={refInput}
        onChange={handleChange}
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
