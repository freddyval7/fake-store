"use client";

import { ProductType } from "@/app/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";
import { Heart, ShoppingCart, Star, Store } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";

export default function Product({ product }: { product: ProductType }) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [isInWishList, setIsInWishList] = useState(false);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  useLayoutEffect(() => {
    const wishlist = localStorage.getItem(`wishlist`);
    if (wishlist) {
      const wishlistArray = JSON.parse(wishlist);
      const found = wishlistArray.find(
        (item: ProductType) => item.id === product.id
      );
      if (found) {
        setIsInWishList(true);
      }
    }
  }, [product.id]);

  function addToWishlist() {
    const wishlist = localStorage.getItem(`wishlist`);
    if (isInWishList) {
      if (!wishlist) return;
      const wishlistArray = JSON.parse(wishlist);
      const filteredArray = wishlistArray.filter(
        (item: ProductType) => item.id !== product.id
        );
        localStorage.setItem(`wishlist`, JSON.stringify(filteredArray));
        setIsInWishList(false);
        toast({
          title: "Product removed from wishlist",
          description: "The product has been removed from the wishlist successfully!",
          duration: 3000,
        });
      return;
    };

    const object = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    };

    if (wishlist) {
      const wishlistArray = JSON.parse(wishlist);
      wishlistArray.push(object);
      localStorage.setItem(`wishlist`, JSON.stringify(wishlistArray));
      setIsInWishList(true);
    } else localStorage.setItem(`wishlist`, JSON.stringify([object]));

    toast({
      title: "Product added to wishlist",
      description: "The product has been added to the wishlist successfully!",
      duration: 3000,
    });
    router.refresh();
  }

  function addProductToCart() {
    const cart = localStorage.getItem(`cart`);

    const object = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: quantity,
    };
    toast({
      title: "Product added to cart",
      description: "The product has been added to the cart successfully!",
      duration: 5000,
    });

    if (cart) {
      const cartArray = JSON.parse(cart);
      cartArray.push(object);
      localStorage.setItem(`cart`, JSON.stringify(cartArray));
      return;
    } else localStorage.setItem(`cart`, JSON.stringify([object]));
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 min-h-[70dvh]">
      <Dialog open={open} onOpenChange={setOpen}>
        <div className="my-auto mx-auto max-w-[25dvh] md:max-w-[50dvh] flex justify-center">
          <Image
            priority
            className="mx-auto object-contain"
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col justify-between gap-4">
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
              <div className="flex items-center justify-between w-full">
                <h1 className="font-bold text-2xl">{product.title}</h1>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipContent>
                      <p className="font-bold text-sm">
                        {isInWishList
                          ? "This product is in your wishlist!"
                          : "Add to your wishlist"}
                      </p>
                    </TooltipContent>
                    <TooltipTrigger>
                      <Heart
                        onClick={addToWishlist}
                        className={
                          isInWishList
                            ? "h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 fill-primary"
                            : "h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 hover:fill-primary"
                        }
                      />
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </div>
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
            <DialogTrigger asChild>
              <Button
                className="uppercase font-bold text-lg w-full glex items-center gap-4 group"
                size={"lg"}
              >
                <ShoppingCart className="h-6 w-6 group-hover:animate-bounce" />
                Add to Cart
              </Button>
            </DialogTrigger>
          </div>
          <DialogContent>
            <DialogHeader>
              <h2 className="font-bold text-lg uppercase">
                Choose the Quantity:
              </h2>
            </DialogHeader>
            <div className="flex items-center gap-4 my-2 mx-auto border p-8 shadow-md">
              <Button
                disabled={quantity === 1}
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
                className="h-8"
              >
                -
              </Button>
              <p>{quantity}</p>
              <Button
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
                className="h-8"
              >
                +
              </Button>
            </div>
            <DialogFooter>
              <Button
                onClick={() => {
                  addProductToCart();
                  setOpen(false);
                }}
                className="w-full"
              >
                Add to Cart
              </Button>
            </DialogFooter>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
