"use client";

import { Button } from "@/components/ui/button";
import Payment from "./payment";
import Image from "next/image";
import { HelpCircle, Trash } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ProductType } from "../utils";
import { useLayoutEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

type ProductCart = ProductType & { quantity: number };

export default function Cart() {
  const [cart, setCart] = useState<ProductCart[]>([]);
  const { toast } = useToast();
  useLayoutEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")!) ?? []);
  }, []);

  function removeProduct(id: number) {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast({
      title: "Product removed",
      description: "The product has been removed from the cart",
    });
  }

  function addQuantity(id: number) {
    const newCart = cart.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  function sustractQuantity(id: number) {
    const newCart = cart.map((product) =>
      product.id === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  return (
    <Dialog>
      <div className="grid md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="font-bold text-lg">Your shopping cart</h2>
          <div className="space-y-4">
            {cart.map((product) => (
              <>
                <div key={product.id} className="flex items-center gap-4">
                  <div className="rounded-md border-2 shadow-2xl p-4">
                    <Image
                      width={500}
                      height={500}
                      className="w-14"
                      src={product.image}
                      alt="product"
                    />
                  </div>
                  <div className="flex flex-col justify-between w-full gap-2">
                    <h3 className="font-bold">{product.title}</h3>
                    <span className="text-muted-foreground">
                      ${product.price} USD
                    </span>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <p>Quantity: {product.quantity}</p>
                        <div className="flex items-center gap-2">
                          <Button
                            disabled={product.quantity === 1}
                            onClick={() => sustractQuantity(product.id)}
                            className="h-8"
                          >
                            -
                          </Button>
                          <Button
                            onClick={() => addQuantity(product.id)}
                            className="h-8"
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <DialogTrigger asChild>
                        <Button className="h-8" size={"icon"}>
                          <Trash className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <div className="flex flex-col gap-12 p-4">
                          <DialogHeader className="flex flex-col items-center gap-6">
                            <HelpCircle className="w-20 h-20 mx-auto" />
                            <h3 className="font-bold text-xl text-center uppercase">
                              Are you sure you want to remove this product?
                            </h3>
                          </DialogHeader>
                          <div className="flex justify-end gap-4">
                            <DialogClose
                              asChild
                              onClick={() => removeProduct(product.id)}
                            >
                              <Button>Yes</Button>
                            </DialogClose>
                            <DialogClose asChild>
                              <Button>No</Button>
                            </DialogClose>
                          </div>
                        </div>
                      </DialogContent>
                    </div>
                  </div>
                </div>
                <Separator className="h-0.5 bg-muted-foreground" />
              </>
            ))}
          </div>
          <Payment />
        </div>
        <div className="space-y-4">
          <h2 className="font-bold text-lg">Payment Details</h2>
          <div className="space-y-4"></div>
        </div>
      </div>
    </Dialog>
  );
}
