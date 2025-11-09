
function Input({ result, setResult, operand, setOperand }) {

    const isOperator = (value) => {
        return value === '+' ||
            value === '-' ||
            value === '/' ||
            value === '*' ||
            value === '='
    }

    const previousValue = result.charAt(result.length - 1);


    const validate = (currentValue) => {
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

            // Main Calculation
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

const buttonValues = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '/', 'C', '=']

return (
    <div className="mt-5 flex-1 rounded-lg inset-shadow-sm p-4 
        grid grid-cols-4 gap-3
        ">
        {buttonValues.map((value, index) => {
            return <button key={index} onClick={() => {
                handleClick(value);
            }} value={value}
                className={`bg-gray-500 color-white rounded-md shadow-sm
                    text-xl text-white inset-shadow-sm inset-shadow-gray-600
                    active:bg-gray-500/90 cursor-pointer
                    ${index === 12 && 'col-span-2'}
                    ${index === 15 && 'col-span-2'}
                    ${index === 16 && 'col-span-2'}`}
            >{value}</button>
        })}
    </div>
)
}

export default Input;