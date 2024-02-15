
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SET_CURR_SECTION = 'SET_CURR_SECTION'


const initialState = {
  isLoading: false,
  currSection: 'hero'

}

export function appReducer(state = initialState, action = {}) {
  switch (action.type) {

    case SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading }

    case SET_CURR_SECTION:
      return { ...state, currSection: action.currSection }

    default: return state
  }
}
