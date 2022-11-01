import { Task } from "./Task";

export const TaskList = ({
  tasks,
  filteredTasks,
  updateTask,
  deleteTask,
  updateStateTask,
}) => {
  
  const tasksToRender = filteredTasks.length ? filteredTasks : tasks;

  return (
    <section className="task-list">
      {tasksToRender.length > 0 ? (
        tasksToRender.map((task) => (
          <Task
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
            updateStateTask={updateStateTask}
            filteredTasks={filteredTasks}
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
