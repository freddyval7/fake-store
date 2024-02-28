import { ProductType } from "../../utils";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProductsByCategory({
  products,
  category,
}: {
  products: ProductType[];
  category: string;
}) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold uppercase">
        {products.length} products in the category {`"${category}"`}
      </h2>
      <div className="grid md:gap-6 md:grid-cols-3">
        {products.map((product) => (
          <div
            className="md:max-h-[400px] p-8 flex flex-col justify-between gap-4 md:gap-0 shadow-2xl rounded-md border-2 border-x "
            key={product.id}
          >
            <div className="h-3/5">
              <Image
                priority
                className="object-contain h-full w-full"
                width={500}
                height={500}
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="flex h-auto flex-col justify-start gap-2">
              <h2 className="whitespace-nowrap truncate font-bold">
                {product.title}
              </h2>
              <p className="text-green-700 text-lg">${product.price}</p>
            </div>
            <div className="w-full">
              <Link className="w-full" href={`/product/${product.id}`}>
                <Button className="w-full">View Product</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
