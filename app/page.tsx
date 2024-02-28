import { getFeaturedProducts } from "./action";
import FeaturedProducts from "./featured-products";
import { ProductType } from "./utils";

export default async function Page() {
  const products: ProductType[] = await getFeaturedProducts();

  return (
    <main className="p-5 md:px-16 md:py-8">
      <div>
        <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
        <FeaturedProducts products={products} />
      </div>
    </main>
  );
}
