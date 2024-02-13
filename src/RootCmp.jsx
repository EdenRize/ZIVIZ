import { useEffect } from 'react'
import { Routes, Route } from 'react-router'
import { HomePage } from './views/HomePage';
import { setScreenSize } from './store/actions/app.actions'
import 'animate.css';
import { Gallery } from './views/Gallery';
import { About } from './views/About';



export function RootCmp() {


    useEffect(() => {
        handleScreenResize()
        window.addEventListener('resize', handleScreenResize)

        return () => {
            window.removeEventListener('resize', handleScreenResize)
        }
    }, [])

    function handleScreenResize() {
        setScreenSize(window.innerWidth)
    }

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


