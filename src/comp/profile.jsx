import  {useContext}from 'react'
import UserContext from '../context/userContext'


function Profile() {
    const {user} = useContext(UserContext)
    if(!user)
  return  <div>please Login</div>
  
  return <div>welcome {user.username} & {user.password}</div>
}

export default Profile