"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegistrationForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      lom: (form.elements.namedItem("lom") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      participants: (
        form.elements.namedItem("participants") as HTMLInputElement
      ).value,
    };
console.log("data ", data);
    await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);
    alert("Registration submitted successfully ✅");
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
          </div>
          <div className="space-y-2">
            <Label htmlFor="lom">LOM (Local Organization)</Label>
            <Input id="lom" placeholder="Enter your LOM name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="participants">Number of Participants</Label>
            <Input
              id="participants"
              type="number"
              placeholder="How many will attend?"
            />
          </div>

          <Button className="w-full bg-[#0097D7] hover:bg-[#3A67B1] text-white">
            Submit Registration
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
