/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ButtonControl from '.';

const testFunc = jest.fn()

describe("ButtonControl", () => {

    beforeEach(() => {
        render(<ButtonControl displayText={"test text"} clickHandler={testFunc}/>);
    })

    test("Displays a button", () => {
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    })

    test("Displays the passed text", () => {
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("test text")
    })

    test("Triggers the passed function on click", async () => {
        const button = screen.getByRole("button");
        await userEvent.click(button);

        expect(testFunc).toHaveBeenCalled()
        expect(testFunc).toHaveBeenCalledTimes(1)
    })
})