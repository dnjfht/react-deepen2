// 예시 2: 스크롤 조정 (scrollTo)
import { useEffect, useRef } from 'react'

export default function ScrollTop() {
  const containerRef = useRef()

  // useLayoutEffect(() => {
  //   containerRef.current.scrollTop = containerRef.current.scrollHeight
  // }, [])

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ height: 150, overflow: 'auto', border: '1px solid gray' }}
    >
      {Array.from({ length: 30 }, (_, i) => (
        <p key={i}>항목 {i + 1}</p>
      ))}
    </div>
  )
}
