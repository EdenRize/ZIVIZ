
import { Routes, Route } from 'react-router'
import { HomePage } from './views/HomePage';
import 'animate.css';
import { Gallery } from './views/Gallery';
import { About } from './views/About';



export function RootCmp() {


    return (
        <section className="app">
            <Routes>
                <Route element={<HomePage />} path="/" />
                <Route element={<Gallery />} path="/gallery" />
                <Route element={<About />} path="/about" />
            </Routes>
        </section>
    )
}


