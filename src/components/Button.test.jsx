import { render, screen } from "@testing-library/react"
import { describe, it, expect, beforeEach } from "vitest"
import Button from "./Button";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";


describe('Button Component', () => {
    let handleClick;
    let user;
    let button;

    beforeEach(() => {
        handleClick = vi.fn();
        user = userEvent.setup();
        render(<Button value='1' handleClick={handleClick} />);
        button = screen.getByTestId('button-element');
    })

    it('shows correct value', () => {
        expect(button).toHaveTextContent('1');
    });

    it('gets click', async () => {
        await user.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    })

    it('passes correct value to handleClick', async()=> {
        await user.click(button);
        expect(handleClick).toHaveBeenCalledWith('1');
    });
})