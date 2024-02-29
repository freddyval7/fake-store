import { Button } from "@/components/ui/button";
import Payment from "./payment";
import nextIcon from "@/public/next.svg";
import Image from "next/image";
import { Trash } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Cart() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="space-y-4">
        <h2 className="font-bold text-lg">Your shopping cart</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="rounded-md">
              <Image className="w-14" src={nextIcon} alt="Next icon" />
            </div>
            <div className="flex flex-col justify-between w-full">
              <h3>Product 1</h3>
              <span>$36 USD</span>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm">
                  <p>Quantity: 1</p>
                  <div className="flex items-center gap-2">
                    <Button className="h-8">-</Button>
                    <Button className="h-8">+</Button>
                  </div>
                </div>
                <Button className="h-8" size={"icon"}>
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="h-0.5 bg-muted-foreground" />
        </div>
        <Payment />
      </div>
    </div>
  );
}
