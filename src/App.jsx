import ScrollTop from './components/hooks/useEffect/ScrollTop'
import HookRef from './components/hooks/useRef/HookRef'
import UseCallbackRef from './components/hooks/useRef/UseCallbackRef'
import UseImperativeHandle from './components/hooks/useRef/UseImperativeHandle'
import UseRefForward from './components/hooks/useRef/UseRefForward'
import UseRefNG from './components/hooks/useRef/UseRefNG'
import SimpleDarkMode from './components/stateManagement/globalState/contextAPI/SimpleDarkMode'
import UIControls from './components/stateManagement/localState/UIControls'
import Cart from './components/stateManagement/localState/useReducer/Cart'

function App() {
  return (
    <div>
      <SimpleDarkMode />
      <UIControls />
      <Cart />
      <UseCallbackRef />
      <UseImperativeHandle />
      <UseRefForward />
      <UseRefNG />
      <HookRef />
      <ScrollTop />
    </div>
  )
}

export default App
