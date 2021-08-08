import React, { useState } from "react"

interface Props {
  text: string
}

export const testComponent: React.FC<Props> = (props) => {
  const [inputData, setInputData] = useState("")

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value)
  }

  return (
    <div>
      <h1>{props.text}</h1>
      <input type="text" value={inputData} onChange={handleInput} />
      <h1>{inputData}</h1>
    </div>
  )
}

export default testComponent
