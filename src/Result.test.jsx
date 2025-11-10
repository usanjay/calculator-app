import { describe, it, expect } from "vitest";  
import Result from "./Result";
import { render, screen } from "@testing-library/react";

describe('Output Component', ()=> {
    const result = '1+2+3';
    it('Display the correct value',()=> {
        render(<Result result={result} />)
        expect(
            screen.getByTestId('result-container')
        ).toHaveTextContent('1+2+3');
    })
    it('render nothing when result is not provided', () => {
        render(<Result/>)
        expect(
            screen.getByTestId('result-container')
        ).toBeEmptyDOMElement();
    })
})
