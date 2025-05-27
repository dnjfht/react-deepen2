import { useEffect, useRef } from 'react'
import MyTextBox from './MyTextBox'
import MyTextBoxRef from './MyTextBoxRef'

export default function UseRefForward() {
  const text = useRef(null)

  useEffect(() => {
    console.log(text.current)
    text.current?.focus()
  }, [])

  return (
    <>
      <MyTextBoxRef label="name" ref={text} />
      <MyTextBox label="name" ref={text} />
    </>
  )
}
