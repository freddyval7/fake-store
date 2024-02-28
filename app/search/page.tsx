import { getAllProducts } from "@/app/action";
import { ProductType } from "@/app/utils";
import Search from "./search";

type SearchParams = {
  searching: string;
};

export default async function Page(props: { searchParams: SearchParams }) {
  const products: ProductType[] = await getAllProducts();

  const productsFiltered = products.filter((product) =>
    product.title.toLowerCase().includes(props.searchParams.searching.toLowerCase())
  );

  return (
    <div className="container p-5 md:px-16 md:py-8">
      <Search products={productsFiltered} />
    </div>
  );
}
