import React, { useState } from 'react'

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
    handleUpdateTask();

  }
  
  const handleUpdateTask = () => {
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
