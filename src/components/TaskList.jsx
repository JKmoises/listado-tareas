import { Task } from "./Task";

export const TaskList = ({
  tasks,
  updateTask,
  deleteTask,
  updateStateTask,
  updateNameTask,
}) => {
  return (
    <section className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
            updateStateTask={updateStateTask}
            updateNameTask={updateNameTask}
            key={task.id}
          />
        ))
      ) : (
        <article className="no-task section box-shadow-1 text-center">
          <p>Agrega tu tarea</p>
        </article>
      )}
    </section>
  );
};
