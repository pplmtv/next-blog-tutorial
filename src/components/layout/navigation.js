import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link';

export default function Navigation() {
  // const [session] = useSession()
  const { data: session } = useSession()

  return (
    <header className="container flex flex-row items-center mx-auto px-5 py-14 max-w-screen-lg">
      <Link href="/" className="text-4xl font-bold text-red-300">
        NextJS Startup
      </Link>
      <nav className="ml-auto">
        <Link href="/about" className="mr-5">
          About
        </Link>

        {session && session.accessToken ? (
          <>
              <Link href="/profile" className="mr-5">
                profile
              </Link>
              <div
                  className="inline-block cursor-pointer"
                  onClick={() => signOut()}
              >
                LOGOUT
              </div>
          </>
        ) : (
          <>
              <div
                  className="inline-block cursor-pointer"
                  onClick={() => signIn()}
              >
                LOGIN
              </div>
          </>
        )}
      </nav>
    </header>
  );
}