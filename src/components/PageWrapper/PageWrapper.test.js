/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import '@testing-library/jest-dom/extend-expect';
 import { screen, render } from '@testing-library/react';
 import userEvent from '@testing-library/user-event';
 import { HashRouter as Router } from 'react-router-dom';
 import PageWrapper from '.';

describe("PageWrapper", () => {

    beforeEach(() => {
        render(<Router>
                <PageWrapper />
               </Router>)
    })

    test("Displays a navbar", () => {
        const nav = screen.getByRole("navigation");
        expect(nav).toBeInTheDocument();
    })

    test("Displays 4 navlinks", () => {
        const links = screen.getAllByRole("link");
        expect(links.length).toBe(4);
    })

    test("Changes location when a navlink is clicked", async () => {
        expect(window.location.href).not.toContain("/about")
        const about = screen.getByText("About");
        await userEvent.click(about);
        expect(window.location.href).toContain("/about")
    })
})