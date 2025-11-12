import { describe, it, expect, beforeEach} from "vitest";
import { render, screen } from "@testing-library/react";
import Calculator from "./Calculator";
import userEvent from "@testing-library/user-event";

describe('Calculator Component', () => {
    let user;

    beforeEach(() => {
        user = userEvent.setup();
        render(<Calculator />);
    })

    it('shows initial values at starting', () => {
        expect(
            screen.getByTestId('result-container')
        ).toHaveTextContent('0');
    });

    it('updates result when buttons are clicked', async () => {
        await user.click(screen.getByText('1'));
        expect(screen.getByTestId('result-container')).toHaveTextContent('1');

        await user.click(screen.getByText('2'));
        expect(screen.getByTestId('result-container')).toHaveTextContent('12');
    });

    it('handles addition, subtraction, multiplication, division', async () => {
        await user.click(screen.getByText('2'));
        await user.click(screen.getByText('+'));
        await user.click(screen.getByText('2'));
        await user.click(screen.getByText('='));
        expect(screen.getByTestId('result-container')).toHaveTextContent('4');

        await user.click(screen.getByText('C'));
        await user.click(screen.getByText('2'));
        await user.click(screen.getByText('-'));
        await user.click(screen.getByText('3'));
        await user.click(screen.getByText('='));
        expect(screen.getByTestId('result-container')).toHaveTextContent('-1');

        await user.click(screen.getByText('C'));
        await user.click(screen.getByText('2'));
        await user.click(screen.getByText('*'));
        await user.click(screen.getByText('3'));
        await user.click(screen.getByText('='));
        expect(screen.getByTestId('result-container')).toHaveTextContent('6');

        await user.click(screen.getByText('C'));
        await user.click(screen.getByText('5'));
        await user.click(screen.getByText('/'));
        await user.click(screen.getByText('2'));
        await user.click(screen.getByText('='));
        expect(screen.getByTestId('result-container')).toHaveTextContent('2.5');

    });

    it('resets when C is clicked', async () => {
        await user.click(screen.getByText('2'));
        await user.click(screen.getByText('C'));
        expect(screen.getByTestId('result-container')).toHaveTextContent('0');
    });

    it('prevents double operator clicks', async () => {
        await user.click(screen.getByText('3'));
        await user.click(screen.getByText('+'));
        await user.click(screen.getByText('-'));
        await user.click(screen.getByText('4'));
        expect(screen.getByTestId('result-container')).toHaveTextContent('3+4');

    });

    it('prevents double decimal in same operand', async () => {
        await user.click(screen.getByText('3'));
        await user.click(screen.getByText('.'));
        await user.click(screen.getByText('.'));
        await user.click(screen.getByText('3'));
        expect(screen.getByTestId('result-container')).toHaveTextContent('3.3');

        await user.click(screen.getByText('.'));
        expect(screen.getByTestId('result-container')).toHaveTextContent('3.3');
    });

    it('prevents only decimal as an operand', async () => {
        await user.click(screen.getByText('2'));
        await user.click(screen.getByText('.'));
        await user.click(screen.getByText('2'));
        expect(screen.getByTestId('result-container')).toHaveTextContent('2.2');

        await user.click(screen.getByText('+'));
        await user.click(screen.getByText('.'));
        expect(screen.getByTestId('result-container')).toHaveTextContent('2.2+.');

        await user.click(screen.getByText('+'));
        expect(screen.getByTestId('result-container')).toHaveTextContent('2.2+.');

        await user.click(screen.getByText('='));
        expect(screen.getByTestId('result-container')).toHaveTextContent('2.2+.');

        await user.click(screen.getByText('2'));
        await user.click(screen.getByText('='));
        expect(screen.getByTestId('result-container')).toHaveTextContent('2.4');
    });

    it('allows decimal only at starting, as it include the zero', async () => {
        await user.click(screen.getByText('.'));
        await user.click(screen.getByText('+'));
        await user.click(screen.getByText('1'));
        expect(screen.getByTestId('result-container')).toHaveTextContent('0.+1');
    });

    it('handles invalid expressions', async () => {
        await user.click(screen.getByText('+'));
        await user.click(screen.getByText('='));
        expect(screen.getByTestId('result-container')).toHaveTextContent('0+');
    });

})