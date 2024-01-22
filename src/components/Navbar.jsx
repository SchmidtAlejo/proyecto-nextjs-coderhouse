import NavbarState from "./NavbarState";

export default function Navbar() {

    return (
        <header className="fixed top-0 z-50 h-20 bg-neutral-800 md:bg-transparent hover:bg-neutral-800" id="navbarTransparentId">
            <nav className="container mx-auto flex flex-row">
                <NavbarState>
                    <ul className="flex flex-col md:flex-row text-center items-center gap-x-4 gap-y-3">
                        <li className="nav-item">
                            <a className="nav-link text-center" href="#tienda">Tienda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center" href="#nosotros">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center" href="#contacto">Contacto</a>
                        </li>
                    </ul>
                </NavbarState>
            </nav>
        </header>
    )
}