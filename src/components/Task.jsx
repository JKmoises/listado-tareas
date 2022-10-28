import { useRef } from "react";

export const Task = ({task,updateTask,deleteTask,updateStateTask}) => {
  let { id, name, state } = task;
  const classStateTask = state ? "task-state completed-state" : "task-state pending-state";

  const refTaskName = useRef();
  const refTaskState = useRef();
  const refEditTaskBtn = useRef();
  
  const updateNameTask = () => {
    refTaskName.current.readOnly = false;
    refTaskName.current.focus();
    refTaskName.current.classList.add("edit-task");
    refTaskState.current.classList.add("none");
    refEditTaskBtn.current.classList.add("none");
  };

 /*  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }; */

  return (
    <article className="task section box-shadow-1">
      <input
        ref={refTaskName}
        onKeyDown={(e) => updateTask(e, task)}
        type="text"
        className="task-name"
        name="name"
        value={name}
        readOnly
      />
      <span
        ref={refTaskState}
        onDoubleClick={() => updateStateTask(task)}
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
        <button
          ref={refEditTaskBtn}
          onClick={updateNameTask}
          className="btn-editar"
        >
          Editar
        </button>

        <button onClick={() => deleteTask(id)} className="btn-eliminar">
          Eliminar
        </button>
      </div>
    </article>
  );
};
