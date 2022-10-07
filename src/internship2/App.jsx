import React, { useState, useEffect } from 'react';
import "./App.css";

function Row({name, email, status}) {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{status}</td>
      </tr>
    </>
  )
}


function App() {
  const [list, setList] = useState([]);

  function callapi() {
    fetch("https://demo2211087.mockable.io/mock", {
      method : "POST",
      body : JSON.stringify({
        ashwin : 'ashwin',
      }),
      headers : {
        "content-type" : "application/json",
      }
    })
      .then(res=>res.json())
      .then(data=>{
        setList(data.companies);
      })
  }

  useEffect(()=>{
    callapi();
  }, [])


  return(
    <>
      <div className='container'>

        <nav className='navigation'>
          <ul>
            <li key={0}>Clients</li>
            <li key={1}>Orders</li>
            <li key={2}>Messages</li>
            <li key={3}>Users</li>
            <li key={4}>Settings</li>
          </ul>
          <div className='profile'>
            <div className='img'>
              <img src="https://source.unsplash.com/50x40/?man" alt='....' />
            </div>
            <b>Ashwin</b>
          </div>
        </nav>
        <hr/>

        <section className='heading'>
          <div>
            <h1>Users</h1>
            <button> + Invite User</button>
          </div>
        </section>

        <section className='main-content'>

          <table>
            <thead>
              <tr>
                <th>Names</th>
                <th>E-mail</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                list.map((item, index)=>{
                  return (
                    <>
                      <Row
                        key={index}
                        name={item.name}
                        email={item.email}
                        status={item.status}
                      />
                    </>
                  )
                })
              }
            </tbody>
          </table>

        </section>

      </div>
    </>
  )
}


export default App;
