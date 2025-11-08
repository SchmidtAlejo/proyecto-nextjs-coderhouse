import { capitalLeterHelper } from "@/utils/capitalLeterHelper";
import Link from "next/link";
import BreadcrumbsBack from "../Back";

interface Props {
  category: string;
  productTitle?: string
}

export default function Breadcrumbs({ category, productTitle }: Props) {

  const isProductTitle = typeof productTitle !== "undefined";

  return (
    <div className="mb-8 flex gap-2">
      <BreadcrumbsBack />
      <p>|</p>
      <Link href={"/"} className="text-blue-400" aria-label="Home">Home</Link>
      <p>/</p>
      {
        !isProductTitle ?
          <p>{category}</p> :
          <Link href={"/products/category/" + category} className="text-blue-400" aria-label={category}>{capitalLeterHelper(category)}</Link>
      }
      {
        isProductTitle ?
          <>
            <p>/</p>
            <p>{productTitle}</p>
          </> :
          <></>
      }
    </div>
  );
}
