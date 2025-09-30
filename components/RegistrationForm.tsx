"use client"

import { useState } from "react"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// ✅ Define schema with Zod
const RegistrationSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  lom: z.string().min(1, "LOM is required"),
  email: z.string().email("Invalid email format"),
  participants: z
    .string()
    .min(1, "Number of participants is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Participants must be a positive number",
    }),
})

export default function RegistrationForm() {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      lom: (form.elements.namedItem("lom") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      participants: (form.elements.namedItem("participants") as HTMLInputElement).value,
    }

    // ✅ Validate with Zod
    const result = RegistrationSchema.safeParse(data)

    if (!result.success) {
      const fieldErrors: Record<string, string> = {}
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message
        }
      })
      setErrors(fieldErrors)
      setLoading(false)
      return
    }

    setErrors({})

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      })

      if (res.ok) {
        alert("Registration submitted successfully ✅")
        form.reset() // ✅ Clear the form after success
      } else {
        alert("Failed to send registration ❌")
      }
    } catch (err) {
      alert("An error occurred while submitting ❌")
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-[#0097D7] to-[#3A67B1] text-white">
          <CardTitle>Register Your LOM</CardTitle>
          <CardDescription className="text-blue-100">
            Join us for this incredible international experience
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Enter your full name" />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lom">LOM (Local Organization)</Label>
            <Input id="lom" placeholder="Enter your LOM name" />
            {errors.lom && <p className="text-red-500 text-sm">{errors.lom}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="participants">Number of Participants</Label>
            <Input id="participants" type="number" placeholder="How many will attend?" />
            {errors.participants && (
              <p className="text-red-500 text-sm">{errors.participants}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-[#0097D7] hover:bg-[#3A67B1] text-white"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Registration"}
          </Button>
        </CardContent>
      </Card>
    </form>
  )
}
