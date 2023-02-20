import { useEffect, useState } from "react";
import Link from "next/link";


const UserPage = () => {

    const [users, setUsers] = useState([])
    console.log("Users", users);

    useEffect(() => {
        async function fetchUser(){
            const data = await fetch('https://dummyjson.com/user')
            setUsers(await data.json());
        }
        fetchUser();
    },[])
    return(
        <div>
            <h1>Users</h1>
            {
                /*
                users && users.users &&
                users.users.map(user => <li key={user.id}>{user.firstName}</li>) */

                users && users.users &&
                users.users.map(user => 
                <Link href={`/users/${user.id}`} key={user.id}>
                   <div>{user.firstName}</div>                    
                </Link>
                )


            }
            
        </div>
    )
}

export default UserPage;