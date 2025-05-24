import { useCallback, useMemo, useState } from 'react'
import DataList from './DataList'

export default function SearchData() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  const fetchData = useMemo(() => {
    return Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      name: `Item ${i}`,
    }))
  }, [])

  // const data = fetchData()
  const filtered = useMemo(() => {
    console.log('Filtering...')
    return fetchData.filter((item) => item.name.includes(query))
  }, [query, fetchData])

  const handleSelect = useCallback((item) => {
    console.log('Selected:', item)
    setSelected(item)
  }, [])

  // const filteredUsers = () => {
  //   console.time(`🔍 filter time`)

  //   const result = data.filter((item) => item.name.includes(query))

  //   console.timeEnd(`🔍 filter time`)
  //   return result
  // }

  // useEffect(() => {
  //   // search, size가 바뀔 때마다 필터 실행
  //   filteredUsers()
  // }, [query, data])

  console.log(filtered)

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search item..."
      />
      <DataList items={filtered} onSelect={handleSelect} />
      {selected && <p>Selected: {selected.name}</p>}
    </div>
  )
}
