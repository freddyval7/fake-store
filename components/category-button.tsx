import { getCategories } from "@/app/action";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { SheetClose } from "./ui/sheet";

export default async function CategoriesButton() {
  const categories: string[] = await getCategories();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2">
        Categories
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="px-4 py-2">
        {categories.map((category) => (
          <Link href={`/category/${category}`} key={category}>
            <DropdownMenuItem key={category}>
              <SheetClose className="capitalize cursor-pointer transition-all duration-200 hover:font-bold hover:scale-105">
                {category}
              </SheetClose>
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
