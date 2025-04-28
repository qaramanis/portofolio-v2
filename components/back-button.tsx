import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";

export default function BackButton() {
  return (
    <Link href="/">
      <Button
        variant="default"
        className="bg-transparent group hover:bg-gray-500/50 rounded-2xl"
      >
        <ChevronLeft
          className="mr-2 transition-transform group-hover:-translate-x-1"
          size={18}
        />
        Back to main page
      </Button>
    </Link>
  );
}
