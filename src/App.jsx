
import { Routes,Route } from 'react-router'
import './App.css'
import Auth from './pages/Auth'
import Main from './pages/Main'
import './index.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/main/*' element={<Main />} />
      </Routes>
     
    </div>
  )
}

export default App
