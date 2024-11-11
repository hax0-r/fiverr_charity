import { Outlet } from 'react-router'
import './App.css'
import Lenis from 'lenis'
import Navbar from './Components/Navbar';

function App() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
