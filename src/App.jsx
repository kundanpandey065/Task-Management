
import Header from './layout/Header'
import Footer from './layout/Footer'
import Sidebar from './layout/Sidebar'
import Dashboard from './pages/Dashboard'
// import './App.css'


function App() {

  return (
    <>
      <Header/>
      <Sidebar/>
      <div class="main-content">        
        <Dashboard />
        <Footer/>       
      </div>
     
    </>
  )
}

export default App
