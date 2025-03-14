import User, { UserType } from "./User"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

function UsersList() {
    const [users, setUsers] = useState<UserType[]>([
        { id: uuidv4(), name: "arman", email: "arman@gmail.com" },
        { id: uuidv4(), name: "reza", email: "reza@gmail.com" },
        { id: uuidv4(), name: "negar", email: "negar@gmail.com" },
    ])

    return (
        <div className="p-8">
            <h1 className="my-8 text-5xl text-slate-50">Users List</h1>

            <div className="flex gap-4">
                {users.map((user) => (
                    <User key={user.id} {...user} />
                ))}
            </div>
        </div>
    )
}

export default UsersList
