/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../store';
import BreweryCard from '.';

const testData = {
    id: 1,
    name: "fake pub",
    city: "Atlantis",
    state: "Delaware"
}

describe("BreweryCard", () => {

    beforeEach(() => {
        render(<Provider store={store}>
                <BreweryCard data={testData}/>
               </Provider>)
    })

    test("Displays an appropriate heading", () => {
        const heading = screen.getByRole("heading");
        expect(heading.textContent).toBe("fake pub")
    })

    test("Displays the city and state", () => {
        const location = screen.getByText("Atlantis, Delaware");
        expect(location).toBeInTheDocument();
    })

    test("Toggles state & text on click", async () => {
        const button = screen.getByRole("button");
        expect(button.textContent).toBe("save");
        await userEvent.click(button);
        expect(button.textContent).toBe("saved");
        await userEvent.click(button);
        expect(button.textContent).toBe("save");
    })
})