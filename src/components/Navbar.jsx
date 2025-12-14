import { navLinks } from "../constants"

const Navbar = () => {
  return (
  <header>
    <nav>
        <img src='./logo.svg' alt='Apple Logo'/>

     <ul>
        {navLinks.map(({label})=> (
            <li key={label}>
                <a href={`#${label}`}>{label}</a>
            </li>)
        )}
     </ul>

        <div className="flex-center gap-3">
            <img src="/search.svg" alt="Search Icon" />
            <img src="/cart.svg" alt="Bag Icon" />
        </div>

    </nav>
  </header>
  )
}

export default Navbar