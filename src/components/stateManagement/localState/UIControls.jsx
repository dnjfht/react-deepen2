import { useReducer } from 'react'

const initialState = {
  sidebar: false,
  modal: false,
  darkMode: false,
}

function toggleReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebar: !state.sidebar }
    case 'TOGGLE_MODAL':
      return { ...state, modal: !state.modal }
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode }
    default:
      return state
  }
}

export default function UIControls() {
  const [state, dispatch] = useReducer(toggleReducer, initialState)

  return (
    <>
      <button onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}>
        {state.sidebar ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
      <button onClick={() => dispatch({ type: 'TOGGLE_MODAL' })}>
        {state.modal ? 'Hide Modal' : 'Show Modal'}
      </button>
      <button onClick={() => dispatch({ type: 'TOGGLE_DARK_MODE' })}>
        {state.darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </>
  )
}
