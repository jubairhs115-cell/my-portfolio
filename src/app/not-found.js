import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-4">
        <div className="max-w-md w-full text-center p-8 rounded-2xl bg-[#111827] border border-white/10 shadow-2xl">
          <span className="text-6xl font-extrabold text-[#C2F800] tracking-tight">
            404
          </span>
          <h1 className="text-2xl font-bold text-white mt-4">
            Page Not Found
          </h1>
          <p className="text-sm text-zinc-400 mt-2 mb-6">
            The page you are looking for doesn&apos;t exist or may have been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C2F800] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#b4e600] transition-colors"
          >
            <Home size={15} />
            <span>Return to Home</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
