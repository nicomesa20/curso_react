import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext'

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Hacer curso react', completed: false },
//   { text: 'Testear en react', completed: false },
// ]



function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;