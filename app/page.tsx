import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-black text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Equidator
          </Link>
          <div className="space-x-4">
            <Link href="/login">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Sign Up
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-6 text-black">Smart Stock Analysis & Investment Guidance</h1>
            <p className="text-xl mb-8 text-gray-700">
              Get personalized stock suggestions and expert insights to make informed investment decisions. Join
              Equidator for data-driven investment strategies.
            </p>
            <div className="space-y-4">
              <Link href="/signup">
                <Button size="lg" className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white">
                  Start Investing Now
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5088a09d-f74c-4626-98c3-09d14e21a1e2.jpg-E7svD0pMlPkirOPS1ubmT2pQLeBlx8.jpeg"
                alt="Investment Guidance Illustration"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black text-white p-6">
        <div className="container mx-auto text-center">
          <p>© 2024 Equidator. All rights reserved.</p>
          <p className="text-sm mt-2">Made with ♥ in India</p>
        </div>
      </footer>
    </div>
  )
}

