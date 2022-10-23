import { Task } from "./Task";

export const TaskList = ({tasks, updateTask,deleteTask,updateStateTask}) => {
  return (
    <section className="task-list">
      {tasks.map((task) => (
        <Task
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
          updateStateTask={updateStateTask}
          key={task.id}
        />
      ))}
    </section>
  );
}
