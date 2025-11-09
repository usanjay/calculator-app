import { useState } from 'react';
import './App.css'

import Input from './Input'
import Result from './Result'
import './App.css'

function App() {
  const [operand, setOperand] = useState('');
  const [result, setResult] = useState('0');

  return (
    <div className='flex justify-center items-center h-screen  select-none'>
      <div className='
        max-w-xs bg-gray-300 min-h-120 rounded-sm flex flex-col
        border-gray-200 shadow-xl shadow-gray-500/50 min-w-100 p-3 inset-shadow-sm
      '>
        <h1 className="text-center text-3xl place-self-top font-bold text-gray-700">Calculator</h1>
        <Result result={result} />
        <Input result={result} setResult={setResult} setOperand={setOperand} operand={operand} />
      </div>
    </div>
  )
}

export default App
