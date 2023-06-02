import './App.css'
// import Footer from './components/Footer/Footer'
// import Layout from './components/Layout/Layout'
import {router} from './components/Layout/router'
import {RouterProvider} from 'react-router-dom'
function App() {

  
  return (
<>
<RouterProvider router={router} />
</>
  )
}

export default App
