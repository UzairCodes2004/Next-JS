import React from 'react'
interface User{
    id:number;
    name:string
    email:string
}
const UsersPage = async () => {
    // by using cache : 'no-store we make the /users route dynamic and it will render on demand '
    // by using next : {revalidate :10} the static server side rendering would happend after 10 sec fresh data will be fetched and we can see it through time local stamp
    const res = await fetch('https://jsonplaceholder.typicode.com/users',{cache:'no-store'  })
    const users: User[] = await res.json()
  return (
    <>
    <h1>Users and There emails</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <ul>
        {users.map(user => <li key={user.id}> Name :  {user.name} <br></br>Email : {user.email}</li>)}
    </ul>
    </>
  )
}

export default UsersPage
