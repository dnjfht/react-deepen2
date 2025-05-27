// useEffect => 렌더링 이후에 브라우저가 화면을 그린 다음 실행되도록 예약된다(비동기)
// useLayoutEffect => 렌더링 이후에 브라우저가 화면을 그리기 전에 즉시 실행된다(동기)
// 내부 함수는 동기로 동작한다
// useLayoutEffect는 동기적으로 실행되기 때문에 브러우저의 페인트를 지연시킨다(끝날 때까지 빈 화면이 뜬다)

import { useEffect, useRef, useState } from 'react'

export default function UseEffect({ init }) {
  const initRef = useRef(init)

  const [count, setCount] = useState(0)

  const handleClick = () => setCount(count + 1)

  const sleep = (delay) => {
    const start = Date.now()

    while (true) {
      if (Date.now() - start > delay) {
        break
      }
    }
  }

  useEffect(() => {
    sleep(2000)
    setCount(initRef.current)
    // 2초가 지나고 count 값이 init(10)으로 업데이트
    // 브라우저 페인트가 끝난 후에 실행되기 때문에 빈 화면이 뜨지는 않는다
    // 그 대신 화면이 깜빡인다
  }, [])

  return (
    <>
      <button onClick={handleClick}>카운트</button>
      <p>{count}번 클릭했습니다.</p>
    </>
  )
}
