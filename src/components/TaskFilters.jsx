import React from "react";

export const TaskFilters = ({ filterTasks }) => {
  const handleChange = (e) => {
    filterTasks(e.target.value);
  };

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
        />
      </div>
    </section>
  );
};
