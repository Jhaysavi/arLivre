import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import BasePage from './Pages/BasePage'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'

function RoutesApp() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BasePage />}>
            <Route index element={<Home />} />
            <Route path='sobreNos' element={ <AboutUs />} />
            <Route path='contato' element={ <Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RoutesApp;
