import { useState } from "react";
import { TaskActions } from "./TaskActions";
import { TaskUpdater } from "./TaskUpdater";

export const Task = ({
  task,
  updateTask,
  deleteTask,
  updateStateTask,
}) => {
  const [dataToEdit, setDataToEdit] = useState(false);

  let { id, name, state } = task;

  const classStateTask = state
    ? "task-state completed-state"
    : "task-state pending-state";
  
  const titleStateTask = state
    ? "Dejar tarea pendiente al hacer doble click"
    : "Terminar tarea al hacer doble click";
  

  return (
    <article className="task section box-shadow-1">
      {dataToEdit ? (
        <TaskUpdater
          task={task}
          updateTask={updateTask}
          setDataToEdit={setDataToEdit}
        />
      ) : (
        <>
          <p className="task-name">{name}</p>

          <span
            onDoubleClick={() => updateStateTask(task)}
            className={classStateTask}
            title={titleStateTask}
          >
            {state ? (
              <i className="fas fa-user-check"></i>
            ) : (
              <i className="fas fa-user-clock"></i>
            )}
          </span>

          <TaskActions
            deleteTask={deleteTask}
            setDataToEdit={setDataToEdit}
            taskId={id}
          />
        </>
      )}
    </article>
  );
};
