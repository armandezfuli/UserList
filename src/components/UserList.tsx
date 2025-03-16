import User, { type UserType } from "./User"
import AddUser from "./AddUser"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

function UsersList() {
    const [users, setUsers] = useState<UserType[]>([])

    function addUserHandler(name: string, email: string): void {
        const newUser: UserType = {
            id: uuidv4(),
            name,
            email,
        }

        setUsers((privUsers) => {
            return [...privUsers, newUser]
        })
    }

    function removeHandler(id: string): void {
        setUsers((privUsers) => {
            return privUsers.filter((user) => user.id !== id)
        })
    }

    return (
        <div className="p-8">
            <h1 className="my-8 text-5xl text-slate-50 font-bold">Users List</h1>
            <AddUser addUserHandler={addUserHandler} />
            <div className="flex gap-4 flex-wrap">
                {users.map((user) => (
                    <User key={user.id} {...user} removeHandler={removeHandler} />
                ))}
            </div>
        </div>
    )
}

export default UsersList
