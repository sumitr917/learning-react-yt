import Login from "./components/Login/Login"
import Profile from "./components/Profile/Profile"
import UserContextProvider from "./context/UserContextProvider"


function App() {

  return (
    <>
    <UserContextProvider>
      <h1>React with Chai</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
    </>
  )
}

export default App
