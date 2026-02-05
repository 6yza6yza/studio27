import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-bg-primary)] px-5">
      <h1 className="font-display text-6xl text-[var(--color-text-primary)] md:text-8xl">
        404
      </h1>
      <p className="mt-4 font-body text-lg text-[var(--color-text-secondary)]">
        Page not found
      </p>
      <div className="mt-8">
        <Button href="/" variant="outline">
          Return Home
        </Button>
      </div>
    </div>
  );
}
