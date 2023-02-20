const UserInfoPage = (props) => {
    console.log("Props", props);

    return(
        <div>
            <h1>User Info (Server Side Rendering)</h1>
            {
                props.data.users.map(user => <li key={user.id}>{user.firstName}</li>)
            }
        </div>
    )
}

export const getServerSideProps = async() => {
    console.log("Something running on server side");
    const data =await (await fetch('https://dummyjson.com/user')).json()

    return{        
        props: {
            data
        }
    }
}

export default UserInfoPage;