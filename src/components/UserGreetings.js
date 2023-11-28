export const UserGreetings = () => {
    const isLoggedIn = false
    return(
        <div>
            Welcome {isLoggedIn && "Muoki"}
        </div>
    )

}