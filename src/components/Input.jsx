import Button from "./Button";

function Input({ handleClick }) {
  const buttonsValues = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '/', 'C', '=']

  return (
    <div className="mt-5 flex-1 rounded-lg inset-shadow-sm p-4 grid grid-cols-4 gap-3">
      {buttonsValues.map((value, index) => {
        return (
          <Button key={index} handleClick={handleClick} value={value}/>
        )
      })}
    </div>
  )
}

export default Input;