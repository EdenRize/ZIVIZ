import { SET_IS_LOADING, SET_SCREEN_SIZE } from '../reducers/app.reducer.js'
import { store } from '../store.js'

// Loading
export function setIsLoading(isLoading) {
    store.dispatch({ type: SET_IS_LOADING, isLoading })
}

//mobile
export function setScreenSize(screenSize) {
    store.dispatch({ type: SET_SCREEN_SIZE, screenSize })
}