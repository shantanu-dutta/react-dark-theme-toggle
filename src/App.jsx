import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeToggle from './ThemeToggle/ThemeToggle';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <ThemeToggle />
    </div>
  );
}

export default App;
