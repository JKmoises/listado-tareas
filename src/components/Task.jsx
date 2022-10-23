import React from 'react'

export const Task = ({task,updateTask,deleteTask,updateStateTask}) => {
  let {id,name,state} = task;

  return (
    <article className="task section box-shadow-1">
      <p className="task-name">{name}</p>

      <span
        onDoubleClick={() => updateStateTask(task)}
        className={
          state ? "task-state completed-state" : "task-state pending-state"
        }
        title="Terminar tarea al hacer doble click"
      >
        {state ? (
          <i className="fas fa-user-check"></i>
        ) : (
          <i className="fas fa-user-clock"></i>
        )}
      </span>

      <div className="acciones">
        <button onClick={() => updateTask(task)} className="btn-editar">
          Editar
        </button>

        <button onClick={() => deleteTask(id)} className="btn-eliminar">
          Eliminar
        </button>
      </div>
    </article>
  );
}
