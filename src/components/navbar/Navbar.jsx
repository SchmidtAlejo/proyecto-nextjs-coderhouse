import NavbarState from "./NavbarState";
const API_URL = process.env.NEXT_URL_DEV;

export default function Navbar() {

    return (
        <header className="fixed top-0 h-20 z-50 bg-neutral-800">
            <nav className="mx-auto container flex flex-row px-4 max-w-7xl">
                <NavbarState url={API_URL} />
            </nav>
        </header >
    )
}