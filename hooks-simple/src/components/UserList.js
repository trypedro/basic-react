import React from 'react'
import useResourcers from './useResources'

const UserList = () => {
    const users = useResourcers('users')

    return (
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    )
}

export default UserList