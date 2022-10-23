import { Task } from "./Task";

export const TaskList = ({tasks}) => {
  return (
    <section className="task-list">
      {tasks.map((task) => <Task task={task} key={task.id} />)}
    </section>
  );
}
