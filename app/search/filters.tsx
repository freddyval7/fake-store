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
import { Settings2 } from "lucide-react";

export default function Filters() {
  return (
    <>
      <div className="h-screen w-1/3 hidden md:block">
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
      <DialogTrigger className="md:hidden flex items-center gap-2 ml-auto border-2 p-2 rounded-full">
        <Settings2 />
        <span>Filters</span>
      </DialogTrigger>
      <DialogContent className="pt-10">
        <DialogHeader className="uppercase font-bold text-lg">Filters</DialogHeader>
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
      </DialogContent>
    </>
  );
}
