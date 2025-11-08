import { useState } from 'react';
import './App.css'

import Input from './Input'
import Result from './Result'
import './App.css'

function App() {

  const [result, setResult] = useState('0');

  return (
    <>
      <Result result={result} />
      <Input result={result} setResult={setResult} />
    </>
  )
}

export default App
