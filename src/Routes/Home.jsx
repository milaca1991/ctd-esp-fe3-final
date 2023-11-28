import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);




  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>


        {/* Aqui deberias renderizar las cards */}

        {users.map((user) => (
          <Card key={user.id} name={user.name} username={user.username} id={user.id} />
        ))}
      </div>
    </main>
  )
}

export default Home