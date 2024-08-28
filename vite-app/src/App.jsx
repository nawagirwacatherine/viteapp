import { useState } from 'react';
import Header from './components/header';
import Home from './components/Home';
import './App.css';
import './scss/main.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <div>
       
      </div>
      <h1>Ordering</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the click on the buttons in the navigation to learn more
      </p>
    </>
  )
}

export default App
