
export default function Button({ value, result, setResult }) {
    const isOperation = (value) => {
        return value === '+' ||
            value === '-' ||
            value === '/' ||
            value === '*' ||
            value === '='
    }


    function updateValue() {
        if (result === '0' && isOperation(value)) return;

        const lastValue = result.charAt(result.length - 1);
        if (lastValue === '.' && value === '.') return;
        if (isOperation(lastValue) && isOperation(value)) return;


        if (value === '=') setResult(eval(result).toString());
        else if (value === 'C') setResult('0');
        else {
            if (result === '0') setResult(value);
            else setResult(result + value);
        }
    }
    return (
        <button onClick={updateValue}>{value}</button>
    )
}