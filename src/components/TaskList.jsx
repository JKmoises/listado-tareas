
export const TaskList = () => {
  return (
    // <i class="fas fa-user-check"></i>
    <section className="task-list">
      <article className="task section box-shadow-1">
        <p className="task-name">Terminar Libro</p>

        <span className="task-state" title="Terminar tarea">
          <i className="fas fa-user-clock"></i>
        </span>

        <div className="acciones">
          <button className="btn-editar">Editar</button>
          <button className="btn-eliminar">Eliminar</button>
        </div>
      </article>

      <article className="task section box-shadow-1">
        <p className="task-name">Terminar Libro 30 largo</p>

        <span className="task-state" title="Terminar tarea">
          <i className="fas fa-user-clock"></i>
        </span>

        <div className="acciones">
          <button className="btn-editar">Editar</button>
          <button className="btn-eliminar">Eliminar</button>
        </div>
      </article>

      <article className="task section box-shadow-1">
        <p className="task-name">Terminar Libro</p>

        <span className="task-state" title="Terminar tarea">
          <i className="fas fa-user-clock"></i>
          
        </span>

        <div className="acciones">
          <button className="btn-editar">Editar</button>
          <button className="btn-eliminar">Eliminar</button>
        </div>
      </article>
    </section>
  );
}
