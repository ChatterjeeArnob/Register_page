import React from 'react'
import { useLocation } from 'react-router-dom'

const Welcome = () => {
    const location = useLocation();
    console.log(location.state);
  return (
    <div>
      <h1>Welcome {location.state.id.firstname}</h1>
    </div>
  )
}

export default Welcome
