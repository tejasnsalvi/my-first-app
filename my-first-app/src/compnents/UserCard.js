import React from 'react'

function UserCard({ name, email }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    )
}

export default UserCard