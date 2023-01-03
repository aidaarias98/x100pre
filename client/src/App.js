
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Homepage/Home'
import About from './pages/About/About'
import Products from './pages/Products/Products'
import Contact from './pages/Contact/Contact'
import Navigation from './components/NavBar/Navigation'



import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className='App'>
      
    <Router>
    <Navigation/>
    <br/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/aboutus' element={<About/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/contactus' element={<Contact/>}/>
    </Routes>
    </Router>
    <Footer/>
    
    </div>
  )
}

export default App