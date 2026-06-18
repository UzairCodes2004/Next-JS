import Link from 'next/link';
import React from 'react';
import { sort } from 'fast-sort';


interface User {
  id: number;
  name: string;
  email: string;
}


interface Props {
  searchParams: Promise<{ sortOrder?: string }>;
}

const UsersPage = async ({ searchParams }: Props) => {
  
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });
  const users: User[] = await res.json();

  const { sortOrder } = await searchParams;


  let sortedUsers = users;
  if (sortOrder === 'name') {
    sortedUsers = sort(users).asc((u) => u.name);
  } else if (sortOrder === 'email') {
    sortedUsers = sort(users).asc((u) => u.email);
  }

  return (
    <>
      <h1>Users and Their Emails</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table>
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;