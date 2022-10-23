import { Task } from "./Task";

export const TaskList = ({tasks,deleteTask}) => {
  return (
    <section className="task-list">
      {tasks.map((task) => (
        <Task task={task} deleteTask={deleteTask} key={task.id} />
      ))}
    </section>
  );
}
