export interface UserType {
    id: string
    name: string
    email: string
    removeHandler?: (id: string) => void
}

function User({ id, name, email, removeHandler }: UserType) {
    function removeUserHandler(): void {
        if (removeHandler) {
            removeHandler(id)
        }
    }

    return (
        <div className="border-2 border-sky-900  py-4 px-8 rounded-xl text-sky-100">
            <h6>
                ID : <span className="text-white">{id}</span>
            </h6>
            <h6>
                Name : <span className="text-white">{name}</span>
            </h6>
            <h6>
                Email : <span className="text-white">{email}</span>
            </h6>
            <button
                onClick={removeUserHandler}
                className="mt-4 border border-sky-900 text-sky-100 py-1 px-4 cursor-pointer rounded-xl hover:border-sky-800 hover:text-sky-200 hover:bg-sky-900">
                Remove
            </button>
        </div>
    )
}

export default User
