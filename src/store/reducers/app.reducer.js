
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SET_SCREEN_SIZE = 'SET_SCREEN_SIZE'


const initialState = {
  isLoading: false,
  screenSize: 0,
}

export function appReducer(state = initialState, action = {}) {
  switch (action.type) {

    case SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading }

    case SET_SCREEN_SIZE:
      return { ...state, screenSize: action.screenSize }

    default: return state
  }
}
