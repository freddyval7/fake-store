import { ProductType } from "@/app/utils";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Store } from "lucide-react";
import Image from "next/image";

export default function Product({ product }: { product: ProductType }) {
  return (
    <div className="grid md:grid-cols-2 min-h-[70dvh]">
      <div className="my-auto max-w-[50dvh] flex justify-center">
        <Image
          className="mx-auto object-contain"
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="space-y-8">
          <div className="flex items-center justify-between text-sm">
            <p className="capitalize text-muted-foreground">
              {product.category}
            </p>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <p>
                {product.rating.rate} ({product.rating.count} reviews)
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-pretty">
            <h1 className="font-bold text-2xl">{product.title}</h1>
            <p className="text-lg font-bold">${product.price}</p>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Store className="h-6 w-6" />
          <p className="">Main Branch C.A - USA</p>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold">SIZE</h3>
          <div className="flex gap-4">
            <Button className="rounded-full" size="sm">
              S
            </Button>
            <Button className="rounded-full" size="sm">
              M
            </Button>
            <Button className="rounded-full" size="sm">
              L
            </Button>
            <Button className="rounded-full" size="sm">
              XL
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <Button
            className="uppercase font-bold text-lg w-full glex items-center gap-4 group"
            size={"lg"}
          >
            <ShoppingCart className="h-6 w-6 group-hover:animate-bounce" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
