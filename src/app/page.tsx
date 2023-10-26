
import Home from '@/components/home'
import { NavBar } from '@/components/navbar'
import About from '@/components/about'
import { Resume } from '@/components/resume'
import Portifolio from '@/components/portifolio'
import Footer from '@/components/footer'

export default function App() {
  return (
    <>
      <Home></Home>
      <NavBar></NavBar>
      <About></About>
      <Resume></Resume>
      <Portifolio/>
      <Footer/>
    </>
  )
}
