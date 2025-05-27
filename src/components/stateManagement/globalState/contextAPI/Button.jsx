import { useContext } from 'react'
import { ThemeContext } from './SimpleDarkMode'

export default function Button() {
  const { mode, toggleMode } = useContext(ThemeContext)

  console.log('버튼 리렌더링')
  return (
    <button className={mode} onClick={toggleMode}>
      Click
    </button>
  )
}
