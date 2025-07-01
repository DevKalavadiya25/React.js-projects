// import React from 'react'

// const CreateUser = () => {

//     const handleAddUser = () => {
//         if (newuser.trim() === '') return;  
//         if (editid !== null) {
//             setUsers(Users.map((user, index) => index === editid ? newuser : user));
//             setEditId(null);
//         } else {
//             setUsers([...Users, newuser]);
//         }
//         setNewUser('');
//     }
//     const handleEditUser = (index) => {
//         setNewUser(Users[index]);
//         setEditId(index);
//     }
//     const handleDeleteUser = (index) => {
//         setUsers(Users.filter((_, i) => i !== index));
//         if (editid === index) {
//             setNewUser('');
//             setEditId(null);
//         }
//     }
//     const handleInputChange = (e) => {
//         setNewUser(e.target.value);
//     }
//     return (
//         <div>
//             <h2>Create User</h2>
//             <input 
//                 type="text" 
//                 value={newuser} 
//                 onChange={handleInputChange} 
//                 placeholder="Enter user name" 
//             />
//             <button onClick={handleAddUser}>
//                 {editid !== null ? 'Update User' : 'Add User'}
//             </button>
//             <ul>
//                 {Users.map((user, index) => (
//                     <li key={index}>
//                         {user}
//                         <button onClick={() => handleEditUser(index)}>Edit</button>
//                         <button onClick={() => handleDeleteUser(index)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
 
// }

// export default CreateUser