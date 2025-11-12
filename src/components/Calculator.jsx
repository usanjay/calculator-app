import Input from './Input'
import Result from './Result'
import { useState } from 'react';
import isOperator from '../utils/isOperator';

function Calculator() {
    const [operand, setOperand] = useState('');
    const [result, setResult] = useState('0');

    const validate = (currentValue) => {
        const previousValue = result.charAt(result.length - 1);
        if (previousValue === '.' && currentValue === '.') return; // Double Decimals
        if (isOperator(previousValue) && isOperator(currentValue)) return; // Double Operations
        if (currentValue === '.' && operand.includes('.')) return; // Double Decimals in Same Operand
        if (isOperator(currentValue) && operand.includes('.') && operand.length === 1) return; //Only Single Decimal Operand

        return true;
    }

    // Handle Initial Value
    const handleInitial = (currentValue) => {
        if (currentValue === '.') setResult('0.'); // initial is decimal
        else if (isOperator(currentValue)) setResult('0' + currentValue); // initial is operator
        else setResult(currentValue) // initial is number
    }

    function handleClick(currentValue) {
        // Handle Clear Button
        if (currentValue === 'C') {
            setResult('0');
            setOperand('0');
            return;
        }

        if (!validate(currentValue)) return; // Validation Check

        try {
            // Set Operand 
            // Why ? to check decimals in it
            isOperator(currentValue)
                ? setOperand('')
                : setOperand(operand + currentValue);

            // Calculation
            if (currentValue === '=') {
                const finalResult = eval(result).toString();
                setResult(finalResult);
                setOperand(finalResult);
            } else {
                if (result === '0') handleInitial(currentValue);
                else setResult(result + currentValue);
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='
                max-w-xs bg-gray-300 min-h-120 rounded-sm flex flex-col
                border-gray-200 shadow-xl shadow-gray-500/50 min-w-100 p-3 inset-shadow-sm
            '>
            <h1 className="text-center text-3xl place-self-top font-bold text-gray-700">Calculator</h1>
            <Result result={result} />
            <Input handleClick={handleClick} />
        </div>
    );
}


export default Calculator;