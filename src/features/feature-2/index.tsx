import { useState } from 'react';
// removed local import

const Feature2 = () => {
  [priority, setPriority] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSetPriority = (task: Task) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return { ...t, priority };
        }
        return t;
      })
    );
  };

  return (
    <div className="card">
      <h2>Definir Prioridade</h2>
      <select value={priority} onChange={(e) => setPriority(e.target.value)} className="input">
        <option value="low">Baixa</option>
        <option value="medium">Média</option>
        <option value="high">Alta</option>
      </select>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button className="button" onClick={() => handleSetPriority(task)}>
              Definir Prioridade
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feature2;