import Link from "next/link";

export default function Navigation() {
  return (
    <header className="container flex flex-row items-center mx-auto px-5 py-14 max-w-screen-lg">
      <Link href="/" className="text-4xl font-bold text-red-300">
        NextJS Startup
      </Link>
      <nav className="ml-auto">
        <Link href="/about" className="mr-5">
          About
        </Link>
      </nav>
    </header>
  );
}