import React from "react";

export const TaskFilters = ({ filterTasks, tasks }) => {
  const allPending = tasks.every(task => task.state === false);
  const allCompleted = tasks.every(task => task.state === true);

  const handleChange = (e) => filterTasks(e.target);

  return (
    <section className="filtros box-shadow-1">
      <div className="filtro">
        <label htmlFor="all-tasks">Todas</label>
        <input
          onChange={handleChange}
          type="radio"
          id="all-tasks"
          name="statetask"
          value=""
          defaultChecked
        />
      </div>

      <div className="filtro">
        <label htmlFor="pending-tasks">Pendientes</label>
        <input
          onChange={handleChange}
          type="radio"
          id="pending-tasks"
          name="statetask"
          value="0"
          disabled={allCompleted}
        />
      </div>

      <div className="filtro">
        <label htmlFor="completed-tasks">Terminadas</label>
        <input
          onChange={handleChange}
          type="radio"
          id="completed-tasks"
          name="statetask"
          value="1"
          disabled={allPending}
        />
      </div>
    </section>
  );
};
