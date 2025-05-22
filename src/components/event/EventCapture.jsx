export default function EventCapture() {
  const handleParent = () => {
    alert('#parent run...')
  }

  const handleMy = () => {
    alert('#my run...')
  }

  const handleChild = (e) => {
    e.stopPropagation() // 이벤트 전파 방지
    e.preventDefault() // 기본 이벤트 실행 방지
    alert('#child run...')
  }

  return (
    <div onClick={handleParent}>
      {/* 캡처링 단계에서 이벤트를 실행하려면 "onClickCapture" 사용 */}
      부모 요소
      <div onClick={handleMy}>
        현재 요소
        <a href="https://wikibook.co.kr/" onClick={handleChild}>
          자식 요소
        </a>
      </div>
    </div>
  )
}
