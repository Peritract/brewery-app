/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import '@testing-library/jest-dom/extend-expect';
 import { screen, render, waitForElementToBeRemoved } from '@testing-library/react';
 import { Provider } from 'react-redux';
 import userEvent from '@testing-library/user-event';
 import store from '../../store';
 import { add } from '../../reducers/breweryReducer';
 import Saved from '.';
 
 describe("Saved", () => {

    test("Displays a message when no breweries are saved", () => {

        render(<Provider store={store}>
            <Saved />
           </Provider>)

        const message = screen.getByText("No breweries saved...")
        expect(message).toBeInTheDocument();
    })

    test("Displays brewery cards when the data is stored in state", () => {
        store.dispatch(add({
            "id":"banjo-brewing-fayetteville",
            "name":"Banjo Brewing",
            "city":"Fayetteville",
            "state":"West Virginia",
        }))

        store.dispatch(add({
            "id":"barrel-brothers-brewing-company-windsor",
            "name":"Barrel Brothers Brewing Company",
            "city":"Windsor",
            "state":"California"
        }))

        render(<Provider store={store}>
            <Saved />
           </Provider>)

        const cards = screen.getAllByRole("figure");
        expect(cards.length).toBe(2); 
    })
 })


