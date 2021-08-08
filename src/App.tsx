import React from 'react'
import logo from './logo.svg'
import './App.css';

//INtersection types
type PROFILE = {
  age: Number,
  city: string
}

type LOGIN = {
  username: string,
  password: string
}

type USER = PROFILE & LOGIN

const userA: USER = {
  age: 30,
  city: "tokyo",
  username: "xxx",
  password: "yyy",
}

export const App:React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App
