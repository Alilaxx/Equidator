"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to home page without authentication
    window.location.href = "/home"
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Login to Equidator</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white">
                Login
              </Button>
            </form>
            <div className="mt-6 text-center">
              <Link href="/forgot-password" className="text-sm text-gray-600 hover:underline">
                Forgot Password?
              </Link>
              <div className="mt-4">
                <span className="text-gray-600">Not a user? </span>
                <Link href="/signup" className="text-black hover:underline">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

