import Button from "./Button";

function Input({ result, setResult }) {


    return (
        <div className="input-container">
            <Button result={result} setResult={setResult} value={'1'} />
            <Button result={result} setResult={setResult} value={'2'} />
            <Button result={result} setResult={setResult} value={'3'} />
            <Button result={result} setResult={setResult} value={'4'} />
            <Button result={result} setResult={setResult} value={'5'} />
            <Button result={result} setResult={setResult} value={'6'} />
            <Button result={result} setResult={setResult} value={'7'} />
            <Button result={result} setResult={setResult} value={'8'} />
            <Button result={result} setResult={setResult} value={'9'} />
            <Button result={result} setResult={setResult} value={'0'} />
            <Button result={result} setResult={setResult} value={'.'} />
            <Button result={result} setResult={setResult} value={'+'} />
            <Button result={result} setResult={setResult} value={'-'} />
            <Button result={result} setResult={setResult} value={'*'} />
            <Button result={result} setResult={setResult} value={'/'} />
            <Button result={result} setResult={setResult} value={'C'} />
            <Button result={result} setResult={setResult} value={'='} />

        </div>
    )
}

export default Input;