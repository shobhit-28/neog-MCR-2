import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/homePage/homePage'
import { ArchivePage } from './pages/archivePage/archivePage'
import { NavBar } from './navBar/navBar'

function App() {

  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/archive' element={<ArchivePage />} />
      </Routes>
    </div>
  )
}

export default App
