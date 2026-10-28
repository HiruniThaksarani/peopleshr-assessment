import Link from "next/link";
import Button from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] bg-[#f8fbff] flex items-center justify-center px-4 py-20">
      <div className="max-w-xl text-center">
        <p className="text-xs font-extrabold tracking-wider uppercase text-primary">404</p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
          The page you requested is missing or may have moved. Try one of these useful PeoplesHR destinations instead.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full px-6 text-sm font-bold">
            <Link href="/" className="inline-flex items-center gap-2">
              Home
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-6 text-sm">
            <Link href="/features">Features</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-6 text-sm">
            <Link href="/packages">Packages</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-6 text-sm">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
