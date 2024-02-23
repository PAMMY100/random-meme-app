import logo from  '../assets/Logo (1).png'

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={logo} className='logo' alt="logo" />
        <p>React Project</p>
      </nav>
    </header>
  )
}

export default Navbar