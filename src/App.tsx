import React from 'react'
import logo from './logo.svg'
import './App.css';
import Data from "./data.json"

type USERS = typeof Data

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

// Union Types
let value: boolean | number
value = true
value = 10

let arrayUni: (number | string | boolean)[]
arrayUni = [0, 1, 2, "hello", true]

// Literal Types
let company: "facebook" | "Google" | "Amazon"
company = "Amazon"

// typeof
let msg: string = "hi"
let msg2: typeof msg

msg2 = "hello"

let animal = {cat: "small cat"}
let newAnimal: typeof animal = {cat: "big cat"}

// keyof
type KEYS = {
  primary: string
  secondary: string
}

let key: keyof KEYS
key = "primary"

// typeof + keyof
const SPORTS = {
  soccer: "soccer",
  baseball: "baseball"
}

//Generics
interface GEN<T>{
  item: T
}

const gen0: GEN<string> = { item: "hello" }
const gen1: GEN<number> = { item: 1 }

interface GEN1<T extends string | number > {
  item: T
}

const gen2: GEN1<string> = { item: "hi"}

function funcGEN<T>(props: T) {
  return { item: props }
}

const gen3 = funcGEN<string>("test")

function funcGEN1<T extends string | null>(props: T) {
  return { value: props}
}
const gen4 = funcGEN1("hello")

interface Props {
  price: number
}
function funcGEN2<T extends Props>(props: T) {
  return { value: props.price }
}
const gen5 = funcGEN2({ price: 111 })

let keySports: keyof typeof SPORTS
keySports = "soccer"

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
