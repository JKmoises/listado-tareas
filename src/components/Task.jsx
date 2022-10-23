import React from 'react'

export const Task = ({task}) => {
  let {name,state} = task;

  return (
    <article className="task section box-shadow-1">
      <p className="task-name">{name}</p>

      <span className="task-state" title="Terminar tarea">
        {state ? (
          <i class="fas fa-user-check"></i>
        ) : (
          <i className="fas fa-user-clock"></i>
        )}
      </span>

      <div className="acciones">
        <button className="btn-editar">Editar</button>
        <button className="btn-eliminar">Eliminar</button>
      </div>
    </article>
  );
}
