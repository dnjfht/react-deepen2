import React from 'react'

const DataList = React.memo(({ items, onSelect }) => {
  console.log('🔁 FilteredList rendered')
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => onSelect(item)}>
          {item.name}
        </li>
      ))}
    </ul>
  )
})

export default DataList
