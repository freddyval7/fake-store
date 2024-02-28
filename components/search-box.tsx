"use client";

import { Search, SendHorizonal } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const [isActivated, setIsActivated] = useState(false);
  const router = useRouter();
  if (isActivated) {
    return (
      <div className="relative flex items-center">
        <Input
          placeholder="Search your product..."
          className="animate-in relative fade-in-40 slide-in-from-right-8 duration-500 transition-all"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SendHorizonal
          onClick={() => {
            setIsActivated(false);
            setSearch("");
            router.push(`/search?searching=${search}`);
          }}
          fill="bg-primary"
          className="absolute right-4 h-4 w-4 cursor-pointer"
        />
      </div>
    );
  } else {
    return (
      <Search className="cursor-pointer" onClick={() => setIsActivated(true)} />
    );
  }
}
