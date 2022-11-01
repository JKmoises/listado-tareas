
export const TaskActions = ({ setDataToEdit, deleteTask, taskId, filteredTasks }) => {
  let disabledFilterBtns = filteredTasks.length !== 0;

  return (
    <div className="acciones">
      <button
        onClick={() => setDataToEdit(true)}
        className="btn-editar"
        disabled={disabledFilterBtns}
      >
        Editar
      </button>

      <button
        onClick={() => deleteTask(taskId)}
        className="btn-eliminar"
        disabled={disabledFilterBtns}
      >
        Eliminar
      </button>
    </div>
  );
};
