import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="h-screen mt-12">
      <Loader2 className="animate-spin mx-auto" size="50" />
    </div>
  );
}
