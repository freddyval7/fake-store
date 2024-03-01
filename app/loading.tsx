import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="h-screen">
      <Loader2 className="mx-auto my-auto animate-spin" size="50" />
    </div>
  );
}
