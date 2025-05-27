import { useContext } from 'react'
import { ThemeContext } from './SimpleDarkMode'
import Header from './Header'

export default function Page() {
  const { mode } = useContext(ThemeContext)

  console.log('페이지 리렌더링')

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: `${mode === 'light' ? 'white' : 'black'}`,
      }}
    >
      <Header />
    </div>
  )
}
