import { SET_IS_LOADING, SET_CURR_SECTION } from '../reducers/app.reducer.js'
import { store } from '../store.js'

// Loading
export function setIsLoading(isLoading) {
    store.dispatch({ type: SET_IS_LOADING, isLoading })
}

//sections
export function setCurrSection(currSection) {
    store.dispatch({ type: SET_CURR_SECTION, currSection })
}