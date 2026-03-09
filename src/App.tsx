import { useState } from 'react';
// removed local import
// removed local import
// removed local import

interface Task {
  id: number;
  text: string;
  done: boolean;
  priority: string;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div className="custom-cursor">
      <h1 style={{ fontSize: '2rem', letterSpacing: '0.12em', color: '#00F5FF' }}>Gestor de Tarefas</h1>
      
      
      
    </div>
  );
};

export default App;