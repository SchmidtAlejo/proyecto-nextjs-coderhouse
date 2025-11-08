import NavbarState from "./NavbarState";

export default function Navbar() {

  return (
    <header className="fixed top-0 z-50 h-20 bg-neutral-800">
      <nav className="container mx-auto flex max-w-7xl flex-row px-4">
        <NavbarState />
      </nav>
    </header >
  );
}