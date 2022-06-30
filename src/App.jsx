import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageWrapper } from './components';
import * as Pages from './pages';

import './app.css';

const App = () => {
    return <Routes>
            <Route path="/" element={<PageWrapper />}>
                <Route path="/" element={<Pages.Home />}/>
                <Route path="/about" element={<Pages.About />}/>
                <Route path="/breweries" element={<Pages.Breweries />}/>
                <Route path="/saved" element={<Pages.Saved />}/>
                <Route path="*" element={<Pages.NotFound />}/>
            </Route>
           </Routes>
}

export default App;