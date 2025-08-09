import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Article from "./components/Article"
import TableSection from "./components/TableSection"
import Aside from "./components/Aside"
import Footer from "./components/Footer"
import {SpeedInsights} from "@vercel/speed-insights"

function App() {

  return (
    <>
    <SpeedInsights/>
    <Navbar/>
    <Header/>
    <Hero/>
    <div className=" container flex flex-col md:flex-row mx-auto p-6">    
      <main className="flex-1">    
      <Article/>
    <TableSection/>
</main>
    <Aside/>
</div>
<Footer/>
    </>
  )
}

export default App
