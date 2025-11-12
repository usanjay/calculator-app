
function Button({handleClick, value}) {
    return (
        <button data-testid="input-button" onClick={() => handleClick(value)} value={value}
            className={`
              bg-gray-500 color-white rounded-md shadow-sm text-xl text-white inset-shadow-sm 
              inset-shadow-gray-600 active:bg-gray-500/90 cursor-pointer active:text-yellow-200
              ${value === '0' && 'col-span-2'}
              ${value === '=' && 'col-span-2'}
              ${value === 'C' && 'col-span-2'}
            `}
        >{value}</button>

    );
}

export default Button;