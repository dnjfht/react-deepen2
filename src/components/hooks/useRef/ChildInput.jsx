import { useRef, useImperativeHandle } from 'react'

export default function ChildInput({ ref }) {
  const inputRef = useRef(null)

  // 부모는 childRef.current.focus() 또는 clear()를 호출할 수 있지만 자식 내부의 input DOM 자체는 보이지 않는다.
  // useImperativeHandle을 통해 명시적으로 노출된 API만 사용할 수 있다.
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus()
    },
    clear: () => {
      inputRef.current.value = ''
    },
  }))

  return <input type="text" ref={inputRef} placeholder="자식 input" />
}
