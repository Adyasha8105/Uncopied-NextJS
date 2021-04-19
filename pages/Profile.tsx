export default Profile = () => {
    //Fetch the user client-side
    const {user} = useUser({ redirectTo:  '/login'})

    //Server-render loading skeleton
    if(!user) {
        return <p>Loading...</p>
    }

    //Once the user request finishes, show the user's name
    return <p>{user.name}</p>
}