import React from 'react'

const UserList = React.memo(({ users, onClickUser }) => {
  console.log('🔁 UserList 리렌더링')
  return (
    <ul>
      {users.map((user) => (
        <li
          key={user}
          onClick={() => onClickUser(user)}
          style={{ cursor: 'pointer' }}
        >
          {user}
        </li>
      ))}
    </ul>
  )
})

export default UserList
