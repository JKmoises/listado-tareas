import { InputTask } from "./components/InputTask";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <div className="container section">
      <h1 className="section-title">Listado de tareas</h1>
      <InputTask />
      <TaskList />
    </div>
  );
}

export default App;
