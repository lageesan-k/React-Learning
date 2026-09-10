import { useState,useEffect } from "react";
import "./users.css"



function User() {
        const [userslist,setUserslist]=useState([]);
        const [loading,setLoading]=useState(false);

        async function fetchAllUsers(){

            try{
                setLoading(true);
                const response=await fetch('http://dummyjson.com/users')
                const result=await response.json();
                console.log(result);


                if(result?.users){
                    setUserslist(result?.users);
                    setLoading(false);
                }else{
                    setUserslist([]);
                    setLoading(false);
                }
            }

            catch(error){
                console.log(error);
                setLoading(false);
            }
        }


    /*  useEffect(()=>{
        fetchAllUsers(); 
    },[])//Runs only once after the initial render (on mount), no dependency so not allow rerender
    */

    function handlefunc(){
        fetchAllUsers();
    }
    
    if(loading){
        return <h1>Loading...</h1>
    }

    return(
        <div>
            <h1>All Users List</h1>
            <button onClick={handlefunc}>Refresh Users</button>
            <ul className="users-list">
                {
                userslist && userslist.length > 0 ?
                 userslist.map((user) => (
                    <li key={user.id}>
                        <h2>{user.firstName} {user.lastName}</h2>
                        <p>Email: {user.email}</p>
                    </li>
                ))
                : <p>No users found.</p>
                }
            </ul>
        </div>
    )
}

export default User;