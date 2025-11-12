const isOperator = (value) => {
        return value === '+' ||
            value === '-' ||
            value === '/' ||
            value === '*' ||
            value === '='
    }

export default isOperator;