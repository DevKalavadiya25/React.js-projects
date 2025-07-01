import React from 'react'
import { useState } from 'react';

const App = () => {

    const [Users , setUsers] =useState([])
    const [newuser, setNewUser] = useState('');
    const [editid , setEditId] = useState(null);


  return (
    <div>
        <h1>Local Box Miner</h1>
        <h2>Users</h2>
    </div>
  )
}

export default App