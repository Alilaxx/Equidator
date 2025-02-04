"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function StockSuggestionPage() {
  const [formData, setFormData] = useState({
    name: "",
    principalCapital: "",
    rrr: "1:3 (High Risk & Reward)",
  })
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/suggest-stocks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customers: [formData] }),
      })
      const data = await response.json()

      if (data.error) {
        setError(data.error)
      } else {
        window.location.href = "/results"
      }
    } catch (err) {
      setError("An error occurred while processing your request")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-2">Stock Suggestion Tool</h1>
          <p className="text-gray-600 text-center mb-8">Enter your details to get personalized stock suggestions.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="principalCapital" className="block text-sm font-medium text-gray-700 mb-1">
                Principal Capital
              </label>
              <Input
                id="principalCapital"
                type="number"
                value={formData.principalCapital}
                onChange={(e) => setFormData({ ...formData, principalCapital: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="rrr" className="block text-sm font-medium text-gray-700 mb-1">
                Risk & Reward Ratio
              </label>
              <select
                id="rrr"
                value={formData.rrr}
                onChange={(e) => setFormData({ ...formData, rrr: e.target.value })}
                className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              >
                <option value="1:3 (High Risk & Reward)">1:3 (High Risk & Reward)</option>
                <option value="1:2 (Moderate Risk & Reward)">1:2 (Moderate Risk & Reward)</option>
                <option value="1:1 (Balanced)">1:1 (Balanced)</option>
                <option value="1:0.5 (Low Risk & Reward)">1:0.5 (Low Risk & Reward)</option>
              </select>
            </div>

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white">
              Get Suggestions
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

