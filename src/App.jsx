import './App.css'


import { RouterProvider} from 'react-router-dom';
import router from './router';

import Grade from './pages/Admin/Grade'

function App() {


  return (
  

   <RouterProvider router={router} /> 

  
  )
}

export default App
