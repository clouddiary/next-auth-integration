
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const UserInfoPage = () => {
    const router = useRouter();
    const [userInfo, setUserInfo] = useState();

    console.log(userInfo)
    useEffect(() => {
        const id = router.query.id
        async function getUserById(id){
            const data = await fetch(`https://dummyjson.com/user/${id}`)
            setUserInfo(await data.json());            
        }

        getUserById(id);

    },[router.query.id])

    return (
        <div>
            <h1>UserInfoPage</h1>
            <div></div>
            <div>{userInfo?.id}</div>
            <div>{userInfo?.firstName}</div>
            <div>{userInfo?.lastName}</div>
        </div>
    )
}

export default UserInfoPage;