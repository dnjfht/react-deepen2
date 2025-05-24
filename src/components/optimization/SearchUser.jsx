// 실제로는 굳이 성능 최적화를 할 필요가 없는 코드다.

import { useCallback, useEffect, useMemo, useState } from 'react'
import UserList from './UserList'

export default function SearchUser() {
  const [search, setSearch] = useState('')
  const [count, setCount] = useState(0)

  const users = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace']

  // ✅ 필터링된 사용자 리스트를 메모이제이션 (값 캐시)
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  // ✅ 사용자 클릭 핸들러를 useCallback으로 고정 (함수 캐시)
  const handleClickUser = useCallback((user) => {
    alert(`Clicked user: ${user}`)
  }, [])

  console.log('🔁 SearchUser 리렌더링')

  function expensiveCalculation() {
    console.time('🔍 filter time')

    const result = users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    )

    console.timeEnd('🔍 filter time')
    return result
  }

  useEffect(() => {
    expensiveCalculation()
  }, [count])

  return (
    <div>
      <h2>🔢 Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

      <input
        type="text"
        placeholder="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginLeft: '10px' }}
      />

      {/* ✅ React.memo 적용된 컴포넌트 + useMemo + useCallback */}
      <UserList users={filteredUsers} onClickUser={handleClickUser} />
    </div>
  )
}
