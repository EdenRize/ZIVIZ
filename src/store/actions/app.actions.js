import { SET_CURR_SECTION, SET_VISITED_SECTION } from '../reducers/app.reducer.js'
import { store } from '../store.js'


//sections
export function setCurrSection(currSection) {
    store.dispatch({ type: SET_CURR_SECTION, currSection })
}

export function addVisitedSection(visitedSection) {
    store.dispatch({ type: SET_VISITED_SECTION, visitedSection })
}