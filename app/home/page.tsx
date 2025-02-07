import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-black text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Equidator
          </Link>
          <div className="space-x-4">
            <Link href="/dashboard">
              <Button variant="ghost" className="text-white hover:text-gray-200">
                Dashboard
              </Button>
            </Link>
            <Link href="/profile">
              <Button variant="ghost" className="text-white hover:text-gray-200">
                Profile
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Logout
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Welcome to Your Investment Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
            <p className="text-gray-600 mb-4">Track major market indices and trends</p>
            <Button variant="outline" className="w-full">
              View Markets
            </Button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Get Stock Suggestions</h2>
            <p className="text-gray-600 mb-4">Get personalized stock recommendations</p>
            <Link href="/stock-suggestion">
              <Button className="w-full bg-black text-white hover:bg-gray-800">Get Suggestions</Button>
            </Link>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Your Portfolio</h2>
            <p className="text-gray-600 mb-4">Monitor your investments and returns</p>
            <Button variant="outline" className="w-full">
              View Portfolio
            </Button>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Calculate RRR</h2>
            <p className="text-gray-600 mb-4">Determine your Risk-Reward Ratio</p>
            <Link href="/rrr-calculator">
              <Button className="w-full bg-black text-white hover:bg-gray-800">Calculate RRR</Button>
            </Link>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">View Stock Graph</h2>
            <p className="text-gray-600 mb-4">Analyze stock performance visually</p>
            <Link href="/results">
              <Button className="w-full bg-black text-white hover:bg-gray-800">View Graph</Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-black text-white p-6 mt-8">
        <div className="container mx-auto text-center">
          <p>© 2024 Equidator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

