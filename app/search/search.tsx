"use client"
import { Separator } from "@/components/ui/separator";
import { ProductType } from "../utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Search({ products }: { products: ProductType[] }) {
  const search = useSearchParams().get("searching") || "";
  return (
    <div className="flex gap-16">
      <div className="h-screen w-1/3">
        <h2 className="text-lg">FILTERS</h2>
        <Separator />
        <Accordion type="single" collapsible>
          <AccordionItem value="price">
            <AccordionTrigger>PRICE</AccordionTrigger>
            <AccordionContent className="pt-2 space-y-4">
              <Slider />
              <div className="flex items-center justify-between">
                <p>$0</p>
                <p>$500</p>
                <p>$1000</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="space-y-8"> 
        <h2 className="text-2xl font-bold uppercase">{products.length} results for the product {`"${search}"`}</h2>
        <div className="grid grid-cols-3">
          {products.map((product) => (
            <div
              className="max-h-[400px] p-8 overflow-hidden text-ellipsis flex flex-col justify-between border-y-0 border-x shadow-none"
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
                <h2 className="whitespace-nowrap">{product.title}</h2>
                <p className="text-green-700 text-lg">${product.price}</p>
              </div>
              <div className="w-full">
                <Link className="w-full" href={`/product/${product.id}`}>
                  <Button className="w-full" size={"lg"}>
                    View Product
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
