import { useState } from 'react';
// removed local import

const Feature3 = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleMarkAsDone = (task: Task) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return { ...t, done: true };
        }
        return t;
      })
    );
  };

  return (
    <div className="card">
      <h2>Marcar como Concluída</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button className="button" onClick={() => handleMarkAsDone(task)}>
              Marcar como Concluída
            </>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feature3;