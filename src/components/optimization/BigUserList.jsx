// 데이터 크기에 따른 연산 비용 증가 시각적으로 확인

import { useState, useEffect } from 'react'

export default function BigUserList() {
  const [size, setSize] = useState(10)
  const [search, setSearch] = useState('')

  function generateUsers(size) {
    return Array.from({ length: size }, (_, i) => `user${i}`)
  }

  const users = generateUsers(size)

  const filteredUsers = () => {
    console.time(`🔍 filter time (${size})`)

    const result = users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    )

    console.timeEnd(`🔍 filter time (${size})`)
    return result
  }

  useEffect(() => {
    // search, size가 바뀔 때마다 필터 실행
    filteredUsers()
  }, [search, size])

  return (
    <div>
      <h2>📦 유저 수: {size}</h2>
      <button onClick={() => setSize((s) => s * 10)}>x10 증가</button>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search"
        style={{ marginLeft: 10 }}
      />

      <p>콘솔에서 filter 시간 확인 👉 F12</p>
    </div>
  )
}
