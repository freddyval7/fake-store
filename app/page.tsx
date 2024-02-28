import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { getFeaturedProducts } from "./action";
import { ProductType } from "./utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  const products: ProductType[] = await getFeaturedProducts();

  return (
    <main className="p-5 md:px-16 md:py-8">
      <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
          className="md:max-h-[400px] p-8 flex flex-col justify-between gap-4 md:gap-0 shadow-2xl rounded-md border-2"
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
            <h2 className="whitespace-nowrap truncate font-bold">{product.title}</h2>
            <p className="text-green-700 text-lg">${product.price}</p>
          </div>
          <div className="w-full">
            <Link className="w-full" href={`/product/${product.id}`}>
              <Button className="w-full">
                View Product
              </Button>
            </Link>
          </div>
        </div>
        ))}
      </div>
    </main>
  );
}
