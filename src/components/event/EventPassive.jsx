import { useEffect, useRef } from 'react'
import '../../css/EventPassive.css'

export default function EventPassive() {
  const divRef = useRef(null)
  // 순수한 JavaScript 기능인 addEventListener을 사용하기 위하여 요소를 직접 가져온다(참조).

  // React 19부터 Passive Mode 폐지(React가 자체적으로 passive: false를 설정)되었지만, 여전히 브라우저 자체의 기본 동작은 영향을 미친다.
  // wheel, touchstart, touchmove 같은 이벤트는 여전히 브라우저에서 기본적으로 passive: true로 처리되며, React에서는 직접 조정할 수 없다.

  // wheel 이벤트는 이벤트 핸들러가 preventDefault를 실행할 수 있기 때문에, preventDefault가 실행되지 않는 것을 확인하고 이벤트를 실행한다.
  // => 핸들러의 처리량이 많은 경우에는 그대로 동작 지연으로 이어진다.
  // Passive Mode: 핸들러가 preventDefault 메서드를 호출하지 않을 것을 알고 있는 경우, 이를 미리 브라우저에게 알려준다.
  // => 핸들러가 종료될 때까지 가디리지 않고 스크롤을 시작할 수 있어 페이지 체감 속도가 향상된다.
  // wheel 이벤트는 기본적으로 스크롤 성능 향상을 위해 브라우저가 passive 모드로 등록한다.
  const handleWheel = (e) => {
    e.preventDefault()
    // 기본적으로 Passive Mode가 적용되어 있기 때문에 preventDefault가 무시된다.
    // alert('스크롤 이벤트 실행')
    // alert 자체가 브라우저에서 이벤트 처리 중 중단되는 것이라, 스크롤과 같이 복합적인 UI 이벤트에서는 무시되거나 실행되지 않을 수 있다.
  }

  // 기본적으로 적용되는 Passive Mode가 예상치 못한 결함의 원인이 될 수 있으므로 이를 제거할 것이다.
  // addEventListener은 순수 자바스크립트 기능이므로 Passive Mode를 끄고 켤 수 있다.
  useEffect(() => {
    const div = divRef.current
    div.addEventListener('wheel', handleWheel, { passive: false })

    // 수동으로 설정한 이벤트 핸들러는 component를 폐기할 때 명시적으로 제거해야 한다.
    return () => {
      div.removeEventListener('wheel', handleWheel)
    }
  })

  return (
    <div
      ref={divRef}
      className="box" // onWheel={handleWheel}
    >
      예를 들어 Wheel 이벤트를 핸들러에서...
    </div>
  )
}
