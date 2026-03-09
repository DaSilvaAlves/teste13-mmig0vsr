import { useState } from 'react';
// removed local import

const Feature1 = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: tasks.length + 1, text: task, done: false, priority: 'low' }]);
      setTask('');
    }
  };

  return (
    <div className="card">
      <h2>Adicionar Tarefa</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Digite a tarefa"
        className="input"
      />
      <button className="button" onClick={handleAddTask}>
        Adicionar
      </button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Feature1;