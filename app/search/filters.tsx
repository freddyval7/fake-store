"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";

import { Separator } from "@/components/ui/separator";
import {
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Settings2, Star } from "lucide-react";
import { atom, useAtom } from "jotai";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const FilterAtom = atom({
  price: 1000,
  rating: 5,
});

export default function Filters() {
  const [filters, setFilters] = useAtom(FilterAtom);
  const [price, setPrice] = useState(filters.price);
  const [rating, setRating] = useState(filters.rating);

  const router = useRouter();

  return (
    <>
      <div className="h-screen w-1/3 max-w-[20%] hidden md:block">
        <h2 className="text-lg">FILTERS</h2>
        <Separator />
        <Accordion type="multiple">
          <AccordionItem value="price">
            <AccordionTrigger>PRICE</AccordionTrigger>
            <AccordionContent className="pt-2 space-y-4">
              <Slider
                onValueChange={(value) => {
                  setPrice(value[0] * 1000);
                }}
              />
              <div className="flex items-center justify-between">
                <p>$0</p>
                <p>$500</p>
                <p>$1000</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="rating">
            <AccordionTrigger>RATING</AccordionTrigger>
            <AccordionContent className="pt-2 space-y-4">
              <div className="flex items-center justify-between">
                <Star
                  className="cursor-pointer"
                  fill={rating >= 1 ? "bg-primary" : "white"}
                  onClick={() => {
                    setRating(1);
                  }}
                />{" "}
                <Star
                  className="cursor-pointer"
                  fill={rating >= 2 ? "bg-primary" : "white"}
                  onClick={() => {
                    setRating(2);
                  }}
                />{" "}
                <Star
                  className="cursor-pointer"
                  fill={rating >= 3 ? "bg-primary" : "white"}
                  onClick={() => {
                    setRating(3);
                  }}
                />{" "}
                <Star
                  className="cursor-pointer"
                  fill={rating >= 4 ? "bg-primary" : "white"}
                  onClick={() => {
                    setRating(4);
                  }}
                />{" "}
                <Star
                  className="cursor-pointer"
                  fill={rating === 5 ? "bg-primary" : "white"}
                  onClick={() => {
                    setRating(5);
                  }}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button
          onClick={() => {
            setFilters({ ...filters, price: price, rating: rating });
            router.refresh();
          }}
          className="w-full"
        >
          Apply
        </Button>
      </div>
      <DialogTrigger className="md:hidden flex items-center gap-2 ml-auto border-2 p-2 rounded-full">
        <Settings2 />
        <span>Filters</span>
      </DialogTrigger>
      <DialogContent className="pt-10">
        <DialogHeader className="uppercase font-bold text-lg">
          Filters
        </DialogHeader>
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
          <AccordionItem value="rating">
            <AccordionTrigger>RATING</AccordionTrigger>
            <AccordionContent className="pt-2 space-y-4">
              <div className="flex items-center justify-between">
                <Star
                  className="cursor-pointer"
                  fill={rating >= 1 ? "bg-primary" : "white"}
                  onClick={() => {
                    setRating(1);
                  }}
                />{" "}
                <Star
                  className="cursor-pointer"
                  fill={rating >= 2 ? "bg-primary" : "white"}
                  onClick={() => {
                    setRating(2);
                  }}
                />{" "}
                <Star
                  className="cursor-pointer"
                  fill={rating >= 3 ? "bg-primary" : "white"}
                  onClick={() => {
                    setRating(3);
                  }}
                />{" "}
                <Star
                  className="cursor-pointer"
                  fill={rating >= 4 ? "bg-primary" : "white"}
                  onClick={() => {
                    setRating(4);
                  }}
                />{" "}
                <Star
                  className="cursor-pointer"
                  fill={rating === 5 ? "bg-primary" : "white"}
                  onClick={() => {
                    setRating(5);
                  }}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button
          onClick={() => {
            setFilters({ ...filters, price: price, rating: rating });
            router.refresh();
          }}
          className="w-full"
        >
          Apply
        </Button>
      </DialogContent>
    </>
  );
}
