import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]); 
  const [editId, setEditId] = useState(null); 
  const [editText, setEditText] = useState(""); 


  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const saveTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: editText }) 
      });

      if (response.ok) {
        setTasks(tasks.map(task => 
          task.id === id ? { ...task, title: editText } : task
        ));
        setEditId(null); 
      }
    } catch (error) {
      console.error("Ошибка при обновлении:", error);
    }
  };

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: '10px', listStyle: 'none' }}>
            
            {editId === task.id ? (
              <div>
                <input 
                  type="text" 
                  value={editText} 
                  onChange={(e) => setEditText(e.target.value)} 
                />
                <button onClick={() => saveTask(task.id)}>Подтвердить</button>
                <button onClick={() => setEditId(null)}>Отмена</button>
              </div>
            ) : (
              <div>
                <span>{task.title}</span>
                <button onClick={() => {
                  setEditId(task.id);      
                  setEditText(task.title); 
                }}>
                  Edit
                </button>
              </div>
            )}

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;