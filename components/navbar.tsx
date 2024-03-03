import { Menu, ShoppingCart, StoreIcon } from "lucide-react";
import Link from "next/link";
import SearchBox from "./search-box";
import CategoriesButton from "./category-button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";

export default function Navbar() {
  return (
    <Sheet>
      <div className="md:flex hidden justify-between bg-primary text-primary-foreground items-center py-4 px-16 border-b shadow-md">
        <Link className="flex items-center gap-4" href="/">
          <StoreIcon className="h-5 w-5" />
          <span>U STORE</span>
        </Link>
        <div className="flex items-center gap-6">
          <CategoriesButton />
          <SearchBox />
          <Link className="cursor-pointer" href="/cart">
            <ShoppingCart />
          </Link>
        </div>
      </div>
      <div className="flex md:hidden justify-between bg-primary text-primary-foreground items-center py-4 px-8 border-b shadow-md">
        <Link className="flex items-center gap-4" href="/">
          <StoreIcon className="h-5 w-5" />
          <span>U STORE</span>
        </Link>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <CategoriesButton />
              <Separator />
            </div>
            <div className="space-y-4">
              <SearchBox />
              <Separator />
            </div>
            <div className="space-y-4">
              <Link
                className="cursor-pointer flex items-center gap-4"
                href="/cart"
              >
                <ShoppingCart />
                <span>Cart</span>
              </Link>
              <Separator />
            </div>
          </div>
        </SheetContent>
      </div>
    </Sheet>
  );
}
