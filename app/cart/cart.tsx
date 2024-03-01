"use client";

import { Button } from "@/components/ui/button";
import Payment from "./payment";
import Image from "next/image";
import { HelpCircle, Trash } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ProductType } from "../utils";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { PatternFormat } from "react-number-format";
import { useRouter } from "next/navigation";

type ProductCart = ProductType & { quantity: number };

export default function Cart() {
  const router = useRouter();
  const [cart, setCart] = useState<ProductCart[]>([]);
  const [total, setTotal] = useState(0);
  const { toast } = useToast();
  useLayoutEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")!) ?? []);
  }, []);

  useEffect(() => {
    setTotal(
      +cart
        .reduce((acc, product) => acc + product.price * product.quantity, 0)
        .toFixed(2)
    );
  }, [cart]);

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

  function makePayment() {
    toast({
      title: "Payment successful",
      description:
        "Your payment has been processed successfully, you will be redirected to the home page",
    });
    setTimeout(() => {
      router.push("/");
    }, 3000);
    setCart([]);
    localStorage.removeItem("cart");
  }

  return (
    <Dialog>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="font-bold text-lg">Your shopping cart</h2>
          <div className="space-y-4">
            {cart.length === 0 && (
              <p className="text-muted-foreground my-8">
                Your cart is empty, add some products to continue...
              </p>
            )}
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
        <div
          className={`flex flex-col gap-8 border-l pl-8 ${
            cart.length === 0 && "cursor-not-allowed opacity-50"
          }`}
        >
          <h2 className="font-bold text-lg">Payment Details</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-muted-foreground text-sm">
                Name
              </label>
              <Input disabled={cart.length === 0} placeholder="Freddy Tomada" />
            </div>
            <div className="space-y-2">
              <label htmlFor="name" className="text-muted-foreground text-sm">
                Credit Card Number
              </label>
              <PatternFormat
                disabled={cart.length === 0}
                customInput={Input}
                format="#### #### #### ####"
                placeholder="XXXX XXXX XXXX XXXX"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-muted-foreground text-sm">
                  Expiry Date
                </label>
                <PatternFormat
                  disabled={cart.length === 0}
                  customInput={Input}
                  format="##/##"
                  placeholder="MM/YY"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="name" className="text-muted-foreground text-sm">
                  CVV
                </label>
                <PatternFormat
                  disabled={cart.length === 0}
                  customInput={Input}
                  format="###"
                  placeholder="XXX"
                />
              </div>
            </div>
          </div>
          <Separator className="h-0.5 bg-muted-foreground" />
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">Total</h3>
            <p className="font-bold text-xl">${total} USD</p>
          </div>
          <div className="w-full">
            <Button
              disabled={cart.length === 0}
              onClick={makePayment}
              className="w-full h-12 mt-auto"
            >
              Make Payment
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
