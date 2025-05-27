import { useState, useEffect } from 'react'

export default function DataFetch({ userId }) {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    let ignore = false

    async function loadProfile() {
      const res = await fetch(`/api/users/${userId}`)
      const json = await res.json()

      if (!ignore) {
        setProfile(json)
      }
    }

    loadProfile()

    return () => {
      ignore = true // 언마운트 방지
    }
  }, [userId])

  if (!profile) return <p>로딩 중...</p>
  return <div>{profile.name}님의 프로필입니다.</div>
}
