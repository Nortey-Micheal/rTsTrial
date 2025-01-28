import { Button } from "./components/button"
import { Navbar } from "./components/navbar"


function App() {
  const navLinks = [
    {label: 'Home', address: '/'},
    {label: 'About', address: '/'},
    {label: 'Contact Us', address: '/'},
    {label:'New',address: '/'}
  ]

  return (
    <>
    <Navbar image="src/assets/react.svg" links={navLinks}/>
    <Button />
    </>
  )
}

export default App
