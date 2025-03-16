import { useRef, type FormEvent } from "react"

function AddUser({
    addUserHandler,
}: {
    addUserHandler: (name: string, email: string) => void
}) {
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)

    function addNewUserHandler(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault()

        const name = nameRef.current?.value.trim()
        const email = emailRef.current?.value.trim()

        if (!name || !email) {
            alert("Please enter a valid name and email")
            return
        }

        addUserHandler(name, email)

        if (nameRef.current) nameRef.current.value = ""
        if (emailRef.current) emailRef.current.value = ""
    }

    return (
        <div className="py-8 ">
            <form className="flex gap-4" onSubmit={addNewUserHandler}>
                <input
                    type="text"
                    placeholder="Name"
                    ref={nameRef}
                    className="border-2 border-sky-900 px-4 py-2 rounded-xl outline-none focus:border-sky-800"
                />
                <input
                    type="text"
                    placeholder="Email"
                    ref={emailRef}
                    className="border-2 border-sky-900 px-4 py-2 rounded-xl outline-none focus:border-sky-800"
                />
                <button
                    type="submit"
                    className="border-2 border-sky-900 py-1 px-4 cursor-pointer rounded-xl hover:border-sky-800 hover:text-sky-200 hover:bg-sky-900">
                    Add User
                </button>
            </form>
        </div>
    )
}

export default AddUser
