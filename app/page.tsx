import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { getAllProducts } from "./action";
import { ProductType } from "./utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  const products: ProductType[] = await getAllProducts();

  return (
    <main className="p-5 md:px-16 md:py-8">
      <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <Card
            className="h-[400px] flex flex-col justify-center items-center"
            key={product.id}
          >
            <CardHeader className="h-3/5">
              <Image
                priority
                className="object-contain h-full w-full"
                width={500}
                height={500}
                src={product.image}
                alt={product.title}
              />
            </CardHeader>
            <CardContent className="flex h-auto flex-col justify-start gap-2">
              <h2 className="text-center">{product.title}</h2>
              <p className="text-green-700 text-center text-lg">
                ${product.price}
              </p>
            </CardContent>
            <CardFooter className="w-full">
              <Link href={`/product/${product.id}`}>
                <Button className="w-full">View Product</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
