import "./App.css";
import { tasks, type Task } from "./model/controller";

function App() {
  return (
    <div>
      <h1>Frontend Advent</h1>
      <a href="https://simple-on-it.com/frontend-advent/calendar?date=2024-12-01">
        Материалы Эвента
      </a>

      <div className="tasks-list">
        {tasks.map((task: Task) => (
          <div className="task">
            <p>{task.name}</p>
            <p>{task.day}</p>
            <a href={task.url} target="_blank">
              реализация
            </a>
            <a href={task.video} target="_blank">
              видео
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
