import React from 'react'

export const TaskActions = ({ setDataToEdit, deleteTask, taskId }) => {
  return (
    <div className="acciones">
      <button onClick={() => setDataToEdit(true)} className="btn-editar">
        Editar
      </button>

      <button onClick={() => deleteTask(taskId)} className="btn-eliminar">
        Eliminar
      </button>
    </div>
  );
}
