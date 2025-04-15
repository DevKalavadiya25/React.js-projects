import React from 'react'
import './App.css'
// import LatestRelease from './pages/LatestRelease'

const App = () => {
  const [text,setText,] = React.useState('')
  const arr=[
    {id:1, name:'Gujarati', Address:'savarkundla mahuva Road', Passcode:'364515', Rating:'4.5'},
    {id:2, name:'Punjabi', Address:'Amreli Lathi Road', Passcode:'365601', Rating:'4.0'},
    {id:3, name:'Chines', Address:'savarkundla devla gait', Passcode:'364515', Rating:'4.2'},
    {id:4, name:'South', Address:'savarkundla mahuva Road', Passcode:'364515', Rating:'4.5'},
    {id:5, name:'Kathiyavadi', Address:'Amreli bypass', Passcode:'365601', Rating:'4.0'},
    ]
    const [data, setData] = React.useState(arr)
  let num=arr.filter((item)=>item.name.releaseDate>='R');
  console.log(num);
  const handleFilter = (e) => { 
    let result = arr.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()));
    setData(result);
  }
  return (
    <div>
      <h1> Food-Explorer</h1>
      <div className="inpt">
      <input type="text" placeholder='...Enter Name...' onChange={(e)=>setText (e.target.value)} />
 
      <button onClick={handleFilter}>Search</button>
      </div>
      
      <div class="table-container">

      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Release Date</th>
            <th>Rating</th>

          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.Address}</td>
              <td>{item.Passcode}</td>
              <td>{item.Rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default App