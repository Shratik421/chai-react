import Reac,{useContext} from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
 const {user} =useContext(UserContext);

  if(!user) return (<div>please login</div>)

  return <div> WElcome {user.username}</div>

}

export default Profile