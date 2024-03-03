"use client";
import { ProductType } from "../utils";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Filters, { FilterAtom } from "./filters";
import { Dialog } from "@/components/ui/dialog";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

export default function Search({ products }: { products: ProductType[] }) {
  const [filter] = useAtom(FilterAtom)
  const [productsFiltered, setProductsFiltered] = useState<ProductType[]>(products);
  const search = useSearchParams().get("searching") || "";

  useEffect(() => {
    console.log(filter);
    const filtered = products.filter((product) => {
      if (product.price <= filter.price && product.rating.rate <= filter.rating) {
        return product;
      }
    });
    setProductsFiltered(filtered);
  }, [filter, products]);

  return (
    <Dialog>
      <div className="flex md:flex-row flex-col gap-8 md:gap-16">
        <Filters />
        <div className="space-y-8">
          <h2 className="text-2xl font-bold uppercase">
            {productsFiltered.length} results for the product {`"${search}"`}
          </h2>
          <div className="grid md:grid-cols-3">
            {productsFiltered.map((product) => (
              <div
                className="md:max-h-[400px] max-w-[50dvh] border-b-2 border-b-muted-foreground md:border-b-0 p-8 flex flex-col justify-between gap-4 md:gap-0 border-y-0 border-x shadow-none"
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
        </div>
      </div>
    </Dialog>
  );
}
