
export const Task = ({
  task,
  updateTask,
  deleteTask,
  updateStateTask,
  updateNameTask,
}) => {
  let { id, name, state } = task;
  const classStateTask = state ? "task-state completed-state" : "task-state pending-state";


  return (
    <article className="task section box-shadow-1">
      <input type="text" className="task-name" value={name} readOnly />
      <span
        onDoubleClick={() => updateStateTask(task)}
        onKeyDown={() => updateNameTask()}
        className={classStateTask}
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
};
