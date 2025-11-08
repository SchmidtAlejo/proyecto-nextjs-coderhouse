import { capitalLeterHelper } from "@/utils/capitalLeterHelper";
import Link from "next/link";

export default function ItemSale({ category, image }) {

    const divStyle = {
        backgroundImage: `url(${image})`
    };

    return (
        <Link href={'/products/category/' + category} className="home__sale__item" aria-label={category}>
            <div style={divStyle} className="home__sale__item__background" ></div>
            <p>{capitalLeterHelper(category)}</p>
        </Link>
    )
}