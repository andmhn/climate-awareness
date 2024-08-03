import './App.css'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Body from './components/body/body'
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
     <Navbar/>
     <Body/>
     <ScrollToTop smooth />
     <Footer/>
    </>
  )
}

export default App
