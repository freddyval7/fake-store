import { getProductsByCategory } from "@/app/action";
import { ProductType } from "@/app/utils";
import ProductsByCategory from "./category";

export default async function Page({ params }: { params: { category: string } }) {
  const products: ProductType[] = await getProductsByCategory(params.category);

  const category = params.category.replace(/%20/g, " ");

  return (
    <div className="container p-8 md:py-8 md:px-24">
      <ProductsByCategory category={category} products={products} />
    </div>
  );
}
