import { SearchIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between p-4 border-b shadow-md">
        <Link href="/">
            <span>U STORE</span>
        </Link>
        <div className="flex items-center gap-4"> 
            <SearchIcon className="cursor-pointer" />
            <ShoppingCart className="cursor-pointer" />
        </div>
    </div>
  )
}
