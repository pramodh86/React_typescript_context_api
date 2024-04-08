

import './App.css'
import { ThemeContextProvider } from './Components/Context/ThemeContext'
import { Box } from './Components/Context/Box'
import { UserContextProvider } from './Components/Context/UserContext'
import { User } from './Components/Context/User'
function App() {
  

  return (
    <>

       <ThemeContextProvider>
       <Box></Box>
      </ThemeContextProvider> 

      <UserContextProvider>
        <User></User>
      </UserContextProvider>
     
    </>
  )
}

export default App
