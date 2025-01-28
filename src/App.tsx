import { Navbar } from "./components/navbar"

function App() {
  const navLinks = [
    {label: 'Home',address: '/'},
    {label: 'About', address: '/'},
    {label: 'Contact Us', address: '/'}
  ]
  
  return (
    <>
      <Navbar links={navLinks} image="../assets/react.svg"/>
    </>
  )
}

export default App
