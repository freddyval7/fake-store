import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProductType } from "./utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function FeaturedProducts({
  products,
}: {
  products: ProductType[];
}) {
  return (
    <Carousel opts={{
        loop: true,
    }}>
      <CarouselContent className="space-x-2">
        {products.map((product) => (
          <CarouselItem
            className="md:max-h-[400px] basis-1/2 md:basis-1/3 lg:basis-1/4 p-8 flex flex-col justify-between gap-4 md:gap-0 shadow-2xl rounded-md border-2"
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
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
