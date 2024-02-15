
export const SET_CURR_SECTION = 'SET_CURR_SECTION'
export const SET_VISITED_SECTION = 'SET_VISITED_SECTION'


const initialState = {
  currSection: 'hero',
  visitedSections: []

}

export function appReducer(state = initialState, action = {}) {
  switch (action.type) {

    case SET_CURR_SECTION:
      return { ...state, currSection: action.currSection }

    case SET_VISITED_SECTION:
      return { ...state, visitedSections: [action.visitedSection, ...state.visitedSections] }

    default: return state
  }
}
