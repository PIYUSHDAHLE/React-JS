import React from 'react'
import { useContext } from 'react'
import { usercontext } from './contexts/DataContext'

const App = () => {
  
  const [user,setuser] = useContext(usercontext);
 
  return (
    <>
    <div>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <h1>{user.email}</h1>
    </div>
    </>
  )
}

export default App