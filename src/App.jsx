import './styles/App.css'
import Contacto from './components/Contacto'
import Cuerpo from './components/Cuerpo'
import Header from './components/Header'
import ServiciosHome from './components/ServiciosHome'
import QuienesSomosHome from './components/QuienesSomosHome'
import Planes from './components/Planes'

function App() {


  return (
    <div className=' flex flex-col w-full font-serif'>
      <Contacto/>
      <Header/>
      <Cuerpo/>
      <ServiciosHome/>
      <QuienesSomosHome/>
      <Planes/>
    </div>
  )
}

export default App
