import { useRef } from 'react'
import ChildInput from './ChildInput'

export default function UseImperativeHandle() {
  const childRef = useRef(null)

  return (
    <div>
      <ChildInput ref={childRef} />
      <button onClick={() => childRef.current.focus()}>Focus</button>
      <button onClick={() => childRef.current.clear()}>Clear</button>
    </div>
  )
}
