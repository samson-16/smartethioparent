import './App.css'
import LandingPage from './pages/LandingPage'
import Logging from './pages/Logging.jsx'
import Login from './pages/Login.jsx'

import { RouterProvider} from 'react-router-dom';
import router from './router';

function App() {


  return (
   <>
    {/* <Logging />
   <LandingPage />
    <Login /> */}
   <RouterProvider router={router} /> 

   </>
  
  )
}

export default App
