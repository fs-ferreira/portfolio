import { useState } from "react"
import About from "./components/About/About"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Resume from "./components/Resume/Resume"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import { Toaster } from "sonner"

function App() {
  const [tabIndex, setTabIndex] = useState(0)

  function handleChangeTab(index: number) {
    setTabIndex(index)
  }

  return (
    <>
      <NavBar onChangeTab={handleChangeTab} />
      <div className="container mx-auto">
        {!tabIndex && <Home />}
        {tabIndex === 1 && <About />}
        {tabIndex === 2 && <Resume />}
        {tabIndex === 3 && <Projects />}
        {tabIndex === 4 && <Contact />}
      </div>
      <Toaster richColors  />
    </>
  )
}

export default App
