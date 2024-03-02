import { ShoppingCart, StoreIcon } from "lucide-react";
import Link from "next/link";
import SearchBox from "./search-box";
import CategoriesButton from "./category-button";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-primary text-primary-foreground items-center py-4 px-16 border-b shadow-md">
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
  );
}
