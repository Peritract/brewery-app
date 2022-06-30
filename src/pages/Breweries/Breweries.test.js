/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render, waitForElementToBeRemoved } from '@testing-library/react';
import { Provider } from 'react-redux';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import store from '../../store';
import Breweries from '.';

describe("Breweries", () => {

    beforeEach(() => {
        render(<Provider store={store}>
            <Breweries />
        </Provider>)
    })

    test("Displays the appropriate heading", () => {
        const heading = screen.getByRole("heading");
        expect(heading.textContent).toBe("Breweries!")
    })
})

describe("Breweries", () => {

    test("Displays no cards if no breweries are returned", async () => {

        jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: [] });

        render(<Provider store={store}>
                <Breweries />
               </Provider>)

        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'))

        const cards = screen.queryByRole("figure");
        expect(cards).toBe(null);

    })

    test("Displays the appropriate number of cards for returned data", async () => {

        const mockResponse = {
            data: [{
                "id":"banjo-brewing-fayetteville",
                "name":"Banjo Brewing",
                "city":"Fayetteville",
                "state":"West Virginia",
            }, {
                "id":"barrel-brothers-brewing-company-windsor",
                "name":"Barrel Brothers Brewing Company",
                "city":"Windsor",
                "state":"California"
            }]
        }
        jest.spyOn(axios, 'get').mockResolvedValueOnce(mockResponse);

        render(<Provider store={store}>
                <Breweries />
               </Provider>)

        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'))

        const cards = screen.getAllByRole("figure");
        expect(cards.length).toBe(2);

    })

    test("Updates the state & display for a card when clicked", async () => {
        const mockResponse = {
            data: [{
                "id":"banjo-brewing-fayetteville",
                "name":"Banjo Brewing",
                "city":"Fayetteville",
                "state":"West Virginia",
            }]}

        jest.spyOn(axios, 'get').mockResolvedValueOnce(mockResponse);

        render(<Provider store={store}>
                <Breweries />
               </Provider>)

        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'))

        const button = screen.getByRole("button");

        expect(button.textContent).toBe("save");
        await userEvent.click(button);
        expect(button.textContent).toBe("saved");
        await userEvent.click(button);
        expect(button.textContent).toBe("save");

    })
})