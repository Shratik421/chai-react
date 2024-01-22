import UserContext from './Context/UserContext'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {


  return (
    <UserContextProvider>
     <h1>
      React Aur Chai Context API 
     </h1>
    <Login/>
    <Profile />
    </UserContextProvider>
  )
}

export default App
