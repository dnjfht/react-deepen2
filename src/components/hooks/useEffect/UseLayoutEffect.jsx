import { useEffect, useLayoutEffect, useRef } from 'react'

export default function UseLayoutEffect() {
  const boxRef = useRef()

  useLayoutEffect(() => {
    console.log(
      '🧱 LayoutEffect: box 크기',
      boxRef.current.getBoundingClientRect()
    )
  }, [])

  useEffect(() => {
    console.log('🎨 Effect: box 크기', boxRef.current.getBoundingClientRect())
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <div
        ref={boxRef}
        style={{
          width: '100px',
          height: '100px',
          background: 'skyblue',
        }}
      >
        박스
      </div>
    </div>
  )
}
