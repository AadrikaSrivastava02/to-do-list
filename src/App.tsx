import { useState } from 'react'

interface Todo {
  id: number
  text: string
  done: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState('')

  function addTodo() {
    if (input.trim() === '') return
    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      done: false
    }
    setTodos([...todos, newTodo])
    setInput('')
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function toggleTodo(id: number) {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo))
  }

  return (
    <div>
      <h1>My To-Do App</h1>

      {/* Input to add a todo */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task..."
      />
      <button onClick={addTodo}>Add</button>

      {/* List of todos */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo.id)} />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App