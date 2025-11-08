import Image from "next/image";
import { useCartContext } from "../../context/CartContext";
import cartIcon from "@/assets/cart.svg";
import userIcon from "@/assets/user.svg";
import { useAuthContext } from "../../context/AuthContext";
import Link from "next/link";

export default function CartWidget({ closeMenu }) {

  const { cart } = useCartContext();
  const { user } = useAuthContext();

  return (
    <>
      {
        user.logged ?
          <div className="mx-auto flex flex-col gap-x-4 gap-y-3 md:flex-row">
            <Link href="/cart" className="flex gap-x-3" onClick={closeMenu} aria-label="Cart">
              <p className="md:hidden">Cart</p>
              <div className="relative">
                <Image src={cartIcon} alt="Cart icon" className="h-full" />
                <span className="translate-middle absolute -top-1/2 left-1/2 flex size-5 items-center justify-center rounded-full bg-red-500 text-center text-xs">{cart.length}</span>
              </div>
            </Link>
            <Link href="/account" className="flex gap-x-3" onClick={closeMenu} aria-label="User">
              <p className="md:hidden">User</p>
              <Image src={userIcon} alt="user icon" className="h-full" />

            </Link>
          </div>
          : <>
            <Link href={"/login"} onClick={closeMenu} aria-label="Sign In">Sign In</Link>
          </>
      }
    </>
  );
}
