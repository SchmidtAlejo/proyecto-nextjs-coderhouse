import Image from "next/image";
import { useCartContext } from "../context/CartContext";
import cartIcon from "@/assets/cart.svg"
import userIcon from '@/assets/user.svg'
import { useAuthContext } from "../context/AuthContext";
import Link from "next/link";

export default function CartWidget({ closeMenu }) {

    const { cart } = useCartContext();
    const { user } = useAuthContext();

    return (
        <>
            {
                user.logged ?
                    <div className="flex flex-col md:flex-row gap-x-4 mx-auto gap-y-3">
                        <Link href="/cart" className="flex gap-x-3" onClick={closeMenu}>
                            <p className="md:hidden">Cart</p>
                            <div className="relative">
                                <Image src={cartIcon} alt="Cart icon" height={24} width={24} className="h-full" />
                                <span className="absolute top-[-50%] left-1/2 translate-middle flex justify-center items-center w-5 h-5 rounded-full text-xs bg-red-500 text-center">{cart.length}</span>
                            </div>
                        </Link>
                        <Link href="/account" className="flex gap-x-3" onClick={closeMenu}>
                            <p className="md:hidden">User</p>
                            <Image src={userIcon} alt="user icon" width={24} height={24} className="h-full" />

                        </Link>
                    </div>
                    : <>
                        <Link href={'/login'} onClick={closeMenu}>Sign In</Link>
                    </>
            }
        </>
    )
}
