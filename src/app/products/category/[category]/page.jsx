import ListContainer from "@/components/ListContainer";
import products from "@/data/products";
import capitalLeterHelper from "@/helpers/capitalLeterHelper";

export default function page({ params }) {

    let productsCategory;

    const validateCategorie =params.category !== "all%20products"
    if(validateCategorie){
        productsCategory= products.filter(product =>{
            return product.category==params.category;
        }) 
    }
    else{
        productsCategory= products
    }
    

    return (
        <main className="category">
            <ListContainer products={productsCategory}>
                {validateCategorie? capitalLeterHelper(params.category) : "All products"}
            </ListContainer>
        </main>
    )
}
