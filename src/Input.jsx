
function Input({ result, setResult, operand, setOperand }) {

    const isOperation = (value) => {
        return value === '+' ||
            value === '-' ||
            value === '/' ||
            value === '*' ||
            value === '='
    }

    const validate = (currentValue) => {
        // Why? : becuase like 02 makes problem in eval.
        if (result === '0' && isOperation(currentValue)) return;

        const previousValue = result.charAt(result.length - 1);
        if (previousValue === '.' && currentValue === '.') return;
        if (isOperation(previousValue) && isOperation(currentValue)) return;

        if (operand.includes('.') && currentValue === '.') return;
        return true;
    }

    function handleClick(currentValue) {

        if (!validate(currentValue)) return;

        if (isOperation(currentValue)) setOperand('');
        else setOperand(operand + currentValue);

        if (currentValue === '=') {
            const finalResult = eval(result).toString();
            setResult(finalResult);
            console.log(finalResult);
            setOperand(finalResult);
        } else if (currentValue === 'C') {
            setResult('0');
            setOperand('0');
        } else {
            if (result === '0') setResult(currentValue);
            else setResult(result + currentValue);
        }
    }

    const buttonValues = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', 'C', '/', '=']

    return (
        <div className="input-container ">
            {buttonValues.map((value, index) => {
                return <button key={index} onClick={() => {
                    handleClick(value);
                }} value={value}>{value}</button>
            })}
        </div>
    )
}

export default Input;