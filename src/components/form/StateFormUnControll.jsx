import { useRef } from 'react'

export default function StateFormUnControll() {
  // state에서 입력을 관리하는 방식의 component는 제어 컴포넌트(Controlled Component)이다.
  // state로 입력을 관리하지 않는 방식의 component는 비제어 컴포넌트(UnControlled Component)이다. => 요소에 직접 접근해야 한다.
  // 우선적으로 즉시 값에 접근할 수 있는 제어 컴포넌트를 추천하지만, 입력이 있을 때마다 리렌더링 되거나 코드가 중복되기 쉽다(단점)
  // 비제어 컴포넌트는 입력이 있을 때마다 리렌더링 되지 않고, 표준 구조이기 때문에 비리액트 구조에서도 쉽게 접근할 수 있다.
  // 단점은, 값의 변화를 즉각적으로 감지할 수 없기 때문에(React가) 실시간 입력값 검증이나 폼 조작에 취약하다.
  const name = useRef(null)
  const age = useRef(null)

  const show = () => {
    console.log(
      `안녕하세요, ${name.current.value} (${age.current.value}세) 님!`
    )
  }
  return (
    <form>
      <div>
        <div>
          <label htmlFor="name">이름: </label>
          <input
            id="name"
            name="name"
            type="text"
            ref={name}
            defaultValue="홍길동"
          />
        </div>

        <div>
          <label htmlFor="age">나이: </label>
          <input id="age" name="age" type="text" ref={age} defaultValue="18" />
        </div>

        <div>
          <button type="button" onClick={show}>
            보내기
          </button>
        </div>
      </div>
    </form>
  )
}
