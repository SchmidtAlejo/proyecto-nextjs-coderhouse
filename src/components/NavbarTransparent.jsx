"use client"

export default function NavbarTransparent() {
    if (typeof window !== "undefined") {
        document.addEventListener("scroll", () => {
            const navbar = document.getElementById("navbarTransparentId");
            if (window.scrollY > 0) {
                navbar.classList.remove("md:bg-transparent");
            }
            else {
                navbar.classList.add("md:bg-transparent");
            }
        });
    }
}
