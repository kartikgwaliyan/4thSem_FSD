import logo from '../assets/logo.jpeg'
function Navbar(){
    return(
        <nav className='navbar'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Blogs</li>
                <li>Tutorials</li>
            </ul>
        </nav>
    )
}

export default Navbar