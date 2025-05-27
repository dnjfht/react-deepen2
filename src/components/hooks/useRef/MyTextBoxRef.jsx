import { forwardRef, useEffect, useRef } from 'react'

const MyTextBoxRef = forwardRef(({ label }, ref) => {
  const localRef = useRef(null)

  // 외부에서 받은 ref를 내부 input에 연결 (선택)
  useEffect(() => {
    if (ref && typeof ref === 'object') {
      ref.current = localRef.current
    }
  }, [ref])

  useEffect(() => {
    // 이 코드는 컴포넌트가 렌더링되는 도중에 실행된다.
    // 그 시점엔 아직 React가 ref를 DOM에 연결하지 않는다.
    // React 19: forwardRef를 사용하지 않아도 props로 ref를 전달할 수 있다.
    console.log('MyTextBoxRef : ✅ ref.current in useEffect:', localRef.current)

    localRef.current?.focus()
  }, [])

  return (
    <label>
      {label}:
      <input type="text" ref={ref} />
    </label>
  )
})

export default MyTextBoxRef
