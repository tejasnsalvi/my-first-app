import React from 'react'
import UserCard from '../compnents/UserCard';
import data from "../utils/data"


function UserList() {

    return (
        <div>
            {
                data.map(({ name, email }) => (
                    <UserCard name={name} email={email} />
                )

                )
            }
        </div>
    )
}

export default UserList