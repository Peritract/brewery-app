import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const PageWrapper = () => {
    return <main>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/breweries">Breweries</NavLink>
                    <NavLink to="/saved">Saved</NavLink>
                </nav>
            </header>
            <article>
                <Outlet />
            </article>
           </main>
}

export default PageWrapper;