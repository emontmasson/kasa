import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.scss';

import Home from './pages/Home/Home';
import LogementDetails from './pages/LogementDetails/LogementDetails';
import About from './pages/About/About';
import Header from "./components/Header/Header";
import Error from "./pages/Error/Error"

import Footer from "./components/Footer/Footer";
import ImageFooter from './assets/images/footer.png';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logement/:idLogement" element={<LogementDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer image={ImageFooter} title="© 2020 Kasa. All rights reserved" />
        </Router>
    </React.StrictMode>,

)

