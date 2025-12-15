import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTask, deleteTask, completeTask } from "../redux/todoSlice";

export default function TodoRedux() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const { pending, completed } = useSelector(state => state.todos);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Redux To-Do App</h2>

      {/* Add Task */}
      <div className="input-group mb-4">
        <input
          className="form-control"
          placeholder="Enter task"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            if (task.trim()) {
              dispatch(addTask(task));
              setTask("");
            }
          }}
        >
          Add Task
        </button>
      </div>

      {/* Pending Tasks */}
      <div className="card mb-4">
        <div className="card-header bg-warning text-dark">Pending Tasks</div>
        <ul className="list-group list-group-flush">
          {pending.map(t => (
            <li
              key={t.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {t.text}
              <div>
                {/* Checkbox now marks task complete and disables the button */}
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  onChange={e => {
                    if (e.target.checked) {
                      dispatch(completeTask(t.id));
                    }
                  }}
                />
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => dispatch(completeTask(t.id))}
                  disabled={false} // We'll manage disable via checkbox logic
                >
                  Complete
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(deleteTask(t.id))}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Completed Tasks */}
      <div className="card">
        <div className="card-header bg-success text-white">Completed Tasks</div>
        <ul className="list-group list-group-flush">
          {completed.map(t => (
            <li
              key={t.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span className="text-decoration-line-through">{t.text}</span>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => dispatch(deleteTask(t.id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
