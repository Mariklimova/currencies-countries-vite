import { Route, Routes } from 'react-router-dom'
import Main from './page/Main/Main'


function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  )
}

export default App
