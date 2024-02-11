import { useEffect } from 'react'
import { Routes, Route } from 'react-router'
import { HomePage } from './views/HomePage';
import { setScreenSize } from './store/actions/app.actions'
import 'animate.css';



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
            </Routes>
        </section>
    )
}


