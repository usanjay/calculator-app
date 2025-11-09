import { useState } from 'react';
import './App.css'

import Input from './Input'
import Result from './Result'
import './App.css'

function App() {
  const [operand, setOperand] = useState('');
  const [result, setResult] = useState('0');

  return (
    <div className='calculator '>
      <Result result={result} />
      <Input result={result} setResult={setResult} setOperand={setOperand} operand={operand} />
    </div>
  )
}

export default App
