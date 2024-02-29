import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import SearchBox from "./search-box";
import CategoriesButton from "./category-button";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center py-4 px-16 border-b shadow-md">
      <Link href="/">
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
