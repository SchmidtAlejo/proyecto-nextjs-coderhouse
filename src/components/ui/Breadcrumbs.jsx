import capitalLeterHelper from "@/helpers/capitalLeterHelper";
import Link from "next/link";
import BreadcrumbsBack from "./BreadcrumbsBack";

export default function Breadcrumbs({ category, productTitle, className }) {

  const isProductTitle = typeof productTitle !== 'undefined';

  return (
    <div className="mb-8 flex gap-2">
      <BreadcrumbsBack/>
      <p>|</p>
      <Link href={'/'} className="text-blue-400">Home</Link>
      <p>/</p>
      {
        !isProductTitle ?
          <p>{category}</p> :
          <Link href={'/products/category/'+category} className="text-blue-400">{capitalLeterHelper(category)}</Link>
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
  )
}
