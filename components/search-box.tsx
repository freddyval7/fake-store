"use client";

import { Search, SendHorizonal } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { SheetClose } from "./ui/sheet";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const [isActivated, setIsActivated] = useState(false);
  const router = useRouter();
  if (isActivated) {
    return (
      <div className="relative flex items-center">
        <Input
          placeholder="Search your product..."
          className="animate-in relative text-primary fade-in-40 slide-in-from-right-8 duration-500 transition-all"
          value={search}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setIsActivated(false);
              setSearch("");
              router.push(`/search?searching=${search}`);
            }
            if (e.key === "Escape") {
              setIsActivated(false);
            }
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SheetClose className="block md:hidden">
          <SendHorizonal
            onClick={() => {
              setIsActivated(false);
              setSearch("");
              router.push(`/search?searching=${search}`);
            }}
            fill="bg-primary"
            className="absolute bottom-2.5 right-4 h-4 w-4 cursor-pointer"
          />
        </SheetClose>
        <SendHorizonal
          onClick={() => {
            setIsActivated(false);
            setSearch("");
            router.push(`/search?searching=${search}`);
          }}
          fill="bg-primary"
          className="absolute md:block hidden text-primary bottom-2.5 right-4 h-4 w-4 cursor-pointer"
        />
      </div>
    );
  } else {
    return (
      <div
        onClick={() => setIsActivated(true)}
        className="flex items-center cursor-pointer gap-4"
      >
        <Search className="cursor-pointer" />
        <span className="md:hidden block">Search</span>
      </div>
    );
  }
}
