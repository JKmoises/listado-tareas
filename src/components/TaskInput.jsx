import React, { useRef, useState } from 'react'
import { taskValidations } from '../helpers/taskValidations';


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
    let hasValidations = taskValidations(form);
    if (hasValidations) return;

    createTask(form);
    resetTask();
    refInput.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key !== 'Enter') return;

    e.preventDefault();
    let hasValidations = taskValidations(form);
    if (hasValidations) return;

    createTask(form);
    resetTask();
  };


  const resetTask = () => {
    setForm(initialForm);
  }

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
