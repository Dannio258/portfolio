import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-[#2b3228] px-6 pb-[10vh]">
      <section className="flex w-full max-w-xl flex-col items-center text-center">
        <h1 className="font-instrument text-[clamp(7rem,22vw,12rem)] leading-[0.8] font-normal text-[#d5d6d4]">
          404
        </h1>
 
        <div
          aria-hidden="true"
          className="mt-8 h-px w-14 bg-[#80847e]"
        />

        <p className="mt-6 text-sm tracking-[0.02em] text-[#aaada9] sm:text-base">
          Page not found.
        </p>

        <Link
          to="/"
          className="mt-9 inline-flex items-center justify-center rounded-md border border-[#80847e] px-4 py-2 text-sm font-medium tracking-[0.01em] text-[#d5d6d4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d5d6d4]"
        >
          Back home
        </Link>
      </section>
    </main>
  );
}

export default NotFoundPage;