import { getProductById } from "@/app/action";
import Product from "./product";
import { ProductType } from "@/app/utils";

export default async function Page({ params }: { params: { id: string } }) {
  const product: ProductType = await getProductById(params.id);

  return (
    <div className="container p-8 md:py-8 md:px-24">
      <Product product={product} />
    </div>
  );
}
