import bg from '../assets/bg.png'

function Header() {
  return (
    <header className="header" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        <h1>Explore The World With Us</h1>
        <p>Travel to the most beautiful places and create unforgettable memories.</p>
      </div>
    </header>
  )
}
export default Header