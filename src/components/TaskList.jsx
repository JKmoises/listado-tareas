import { Task } from "./Task";

export const TaskList = ({
  tasks,
  updateTask,
  deleteTask,
  updateStateTask,
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
            key={task.id}
          />
        ))
      ) : (
        <article className="no-task section">
          <p className="text-center text-shadow-1">Agrega una tarea</p>
        </article>
      )}
    </section>
  );
};
