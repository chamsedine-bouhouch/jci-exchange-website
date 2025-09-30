import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Calendar,
  MapPin,
  Users,
  Globe,
  BookOpen,
  Handshake,
  Theater,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Star,
  Award,
  Building,
  Heart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NextPlaceholderImage from "@/components/NextPlaceholderImage";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function JCIExchangePage() {
  return (
    <div
      className="min-h-screen bg-background"
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
      <ScrollToTop />
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/jci_exchange_logo.jpg" // replace with your actual image
              alt="Sousse cityscape with global connections"
              priority
              height={40}
              width={80}
              className=""
            />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-[#0097D7] transition-colors"
            >
              About
            </Link>
            <Link
              href="#program"
              className="text-sm font-medium hover:text-[#0097D7] transition-colors"
            >
              Program
            </Link>
            <Link
              href="#offers"
              className="text-sm font-medium hover:text-[#0097D7] transition-colors"
            >
              Registration
            </Link>
          </nav>
          <Link href="#offers" className="">
            <Button className="text-sm font-medium bg-[#0097D7] hover:bg-[#3A67B1] text-white">
              Join Now
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12  overflow-hidden">
        {/* Background image */}
        <Image
          src="/bg_exchange.jpg" // replace with your actual image
          alt="Sousse cityscape with global connections"
          fill
          priority
          className="object-contain object-center bg-white"
        />
        {/* Overlay (optional gradient for text readability) */}
        <div className="absolute inset-0 bg-white/20"></div>

        <div className="relative container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-[#EDBE38] text-[#0A0F29] hover:bg-[#EDBE38]/90 text-sm px-6 py-3 rounded-full">
            🌟 November 1-4, 2025 • Beautiful Sousse, Tunisia 🇹🇳
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#0A0F29] leading-tight">
            Welcome to JCI EXchange 2025!
            <span className="block text-3xl md:text-5xl text-white   ">
              Where Friendships Begin & Dreams Take Flight ✨
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-black mb-8 max-w-4xl mx-auto leading-relaxed">
            Join us for 4 amazing days of making new friends, sharing cultures,
            and learning together! We can't wait to welcome you to our beautiful
            Tunisia! 🤗
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-[#0097D7] hover:bg-[#3A67B1] text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              🗓️ See What's Planned
              <Calendar className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4  bg-transparent hover:bg-[#3bac90] hover:text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              🎉 Join the Fun
              <Users className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About the Event */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A0F29]">
              What Makes JCI EXchange Special? 💫
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every two years, we bring together amazing JCI members from all
              four corners of the world for an unforgettable experience! Think
              of it as a big, friendly reunion where everyone's invited to make
              new friends and create lasting memories. 🌍❤️
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-l-4 border-l-[#0097D7] hover:shadow-lg transition-all hover:scale-105 bg-gradient-to-br from-white to-blue-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#0097D7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-[#0097D7]" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#0A0F29]">
                  🤝 Making Friends Worldwide
                </h3>
                <p className="text-gray-600 text-sm">
                  Meet incredible people from every continent! Share stories,
                  laugh together, and build friendships that last a lifetime
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#3A67B1] hover:shadow-lg transition-all hover:scale-105 bg-gradient-to-br from-white to-purple-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#3A67B1]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Theater className="w-8 h-8 text-[#3A67B1]" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#0A0F29]">
                  🎭 Celebrating Our Cultures
                </h3>
                <p className="text-gray-600 text-sm">
                  Share your traditions, taste new foods, learn fun dances, and
                  discover the beautiful diversity of our world!
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#56BDA3] hover:shadow-lg transition-all hover:scale-105 bg-gradient-to-br from-white to-green-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#56BDA3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-[#56BDA3]" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#0A0F29]">
                  📚 Learning & Growing Together
                </h3>
                <p className="text-gray-600 text-sm">
                  Join fun workshops, inspiring talks, and hands-on activities
                  that help you grow personally and professionally
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#EDBE38] hover:shadow-lg transition-all hover:scale-105 bg-gradient-to-br from-white to-yellow-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#EDBE38]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-[#EDBE38]" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#0A0F29]">
                  🤗 Strengthening Our JCI Family
                </h3>
                <p className="text-gray-600 text-sm">
                  Feel the warmth of our global JCI community and discover how
                  connected we all are, no matter where we're from
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section
        id="program"
        className="py-16 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A0F29]">
              Your Amazing 4-Day Adventure! 🎊
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've planned something special for every moment! Get ready for
              the most fun and meaningful four days of your year!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Day 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-[#0097D7] to-[#3A67B1] text-white">
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Day 1 - Nov 1st</span>
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Arrival & Welcome
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  {/* Morning */}
                  <p className="font-bold text-lg text-center text-[#EDBE38]">
                    Morning
                  </p>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#56BDA3] rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">
                        Arrival of international participants
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#56BDA3] rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">
                        Check-in at hotel & welcome package distribution
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#56BDA3] rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">
                        Casual networking breakfast
                      </p>
                    </div>
                  </div>
                  {/* Afternoon */}
                  <p className="font-bold text-lg text-center text-[#EDBE38]">
                    Afternoon
                  </p>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#EDBE38] rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">
                        Opening Ceremony & Introduction
                      </p>
                      {/* <p className="text-xs text-gray-600">
                        Traditional Tunisian cuisine
                      </p> */}
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#EDBE38] rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">
                        Session Presentation of JCI Sousse & visiting LOMs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#EDBE38] rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">
                        Guided City Tour of SousseVisit to the Medina (UNESCO
                        site), Ribat,
                      </p>
                    </div>
                  </div>
                  {/* Evening : */}
                  <p className="font-bold text-lg text-center text-[#EDBE38]">
                    Evening
                  </p>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3A67B1]  rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">
                        Diner with past presidents and senators
                      </p>
                      {/* <p className="text-xs text-gray-600">
                        Traditional Tunisian cuisine
                      </p> */}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-[#3A67B1] to-[#56BDA3] text-white">
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Day 2 - Nov 2nd</span>
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Learning & Development
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  {/* Morning */}
                  <p className="font-bold text-lg text-center text-[#EDBE38]">
                    Morning
                  </p>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#56BDA3] rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">JCI Action Day</p>
                      <p className="text-xs text-gray-600">
                        Community Impact Project: Tree planting
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#56BDA3] rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">
                        Executive Board Meeting
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#56BDA3] rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">
                        JCI Future Collaboration Forum
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#56BDA3] rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">
                        Brainstorming session on joint projects & initiatives
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#56BDA3] rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">
                        Planning next steps for the next JCI Exchange
                      </p>
                    </div>
                  </div>
                  {/* Afternoon: */}
                  <p className="font-bold text-lg text-center text-[#EDBE38]">
                    Afternoon
                  </p>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#EDBE38] rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">
                        International Training Session 1
                      </p>
                      <p className="text-xs text-gray-600">
                        Business & entrepreneurship skills or soft skills
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#EDBE38] rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">
                        Round Table: Voices of Local Startups
                      </p>
                    </div>
                  </div>
                  <p className="font-bold text-lg text-center text-[#EDBE38]">
                    Evening
                  </p>
                  <p className="font-semibold text-lg text-center text-[#0097D7]">
                    Panel Discussion & Best Practices Exchange
                  </p>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3A67B1] rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">
                        Sharing impactful JCI projects from different LOMs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3A67B1] rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">
                        Discussions on collaboration opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-[#56BDA3] to-[#EDBE38] text-white">
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Day 3 - Nov 3rd</span>
                </CardTitle>
                <CardDescription className="text-green-100">
                  Action & Friendship
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  <p className="font-bold text-lg text-center text-[#EDBE38]">
                    Morning
                  </p>
                  <p className="font-semibold text-lg text-center text-[#0097D7]">
                    Company Visit in Sousse
                  </p>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#EDBE38] rounded-full mt-2"></div>

                    <div>
                      <p className="font-medium text-sm">
                        Visit of the site of The Dräxlmaier Group
                      </p>
                      <p className="text-xs text-gray-600">
                        a globally operating automotive supplier headquartered
                        in the town of Vilsbiburg in Lower Bavaria, Germany.
                      </p>
                    </div>
                  </div>

                  <p className="font-bold text-lg text-center text-[#EDBE38]">
                    Afternoon:
                  </p>
                  <p className="font-semibold text-lg text-center text-[#0097D7]">
                    JCI Friendship – Social & Fun Activities
                  </p>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#0097D7] rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">
                        International Karaoke Challenge
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#0097D7] rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">
                        Escape room or team-bonding games
                      </p>
                    </div>
                  </div>
                  <p className="font-bold text-lg text-center text-[#EDBE38]">
                    Evening
                  </p>
                  <p className="font-bold text-lg text-center text-black">
                    Closing ceremony
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Day 4 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-[#EDBE38] to-[#0A0F29] text-white">
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Day 4 - Nov 4th</span>
                </CardTitle>
                <CardDescription className="text-yellow-100">
                  Departure & Congress
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  <p className="font-semibold text-lg text-center text-[#0097D7]">
                    Check Out
                  </p>
                  <p className="font-semibold text-lg text-center text-[#0097D7]">
                    Departure to Tunis city to the world congress
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Offers & Subscription Section */}
      <section id="offers" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A0F29]">
              Ready to Join Our Family? 🏠💕
            </h2>
            <div className="inline-block bg-[#EDBE38]/10 border border-[#EDBE38] rounded-full px-6 py-3 mb-6">
              <p className="text-[#0A0F29] font-medium">
                💬 Let's chat! We're here to help with everything
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Offers */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#0A0F29] mb-6">
                Sweet Deals Just for You! 🎁
              </h3>

              <Card className="border-l-4 border-l-[#56BDA3] hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#56BDA3]/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#56BDA3]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-[#0A0F29]">
                        🎉 Bring Your Squad & Save!
                      </h4>
                      <p className="text-gray-600 mb-2">
                        Bring 15+ friends from your LOM and we'll treat
                        <strong>5 of you to free accommodation!</strong>
                        The more the merrier!
                      </p>
                      <Badge className="bg-[#56BDA3] text-white">
                        Friends Discount
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#0097D7] hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0097D7]/10 rounded-full flex items-center justify-center">
                      <Building className="w-6 h-6 text-[#0097D7]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-[#0A0F29]">
                        💰 Super Affordable!
                      </h4>
                      <p className="text-gray-600 mb-2">
                        Just <strong>$150</strong> covers everything - your cozy
                        hotel room, delicious meals, and all activities! What a
                        bargain!
                      </p>
                      <Badge className="bg-[#0097D7] text-white">
                        All-Inclusive Deal
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#3A67B1] hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#3A67B1]/10 rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-[#3A67B1]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-[#0A0F29]">
                        🌟 Learn from the Best!
                      </h4>
                      <p className="text-gray-600 mb-2">
                        Amazing trainers from LOMs around the world will share
                        their wisdom and experience with you!
                      </p>
                      <Badge className="bg-[#3A67B1] text-white">
                        World-Class Learning
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Registration Form */}
            <div>
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
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
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
            </div>
          </div>
        </div>
      </section>

      {/* JCI Sousse History */}
      {/* <section
        id="sousse"
        className="py-16 bg-gradient-to-br from-[#0097D7]/5 to-[#56BDA3]/5"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0A0F29]">
                Meet Your Hosts - JCI Sousse! 👋
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#0097D7]/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[#0097D7]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0A0F29]">
                      🎂 Celebrating Since 1963!
                    </h3>
                    <p className="text-gray-600">
                      We've been spreading joy and making positive changes for
                      over 62 wonderful years!
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#3A67B1]/10 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-[#3A67B1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0A0F29]">
                      🏆 Proud Pioneers
                    </h3>
                    <p className="text-gray-600">
                      We were the very first LOM after JCI Tunisia - talk about
                      being trailblazers!
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#56BDA3]/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#56BDA3]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0A0F29]">
                      🌍 Experienced Event Hosts
                    </h3>
                    <p className="text-gray-600">
                      We rocked CAMEC 2017 and can't wait to create more magical
                      memories with you!
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border-l-4 border-l-[#EDBE38]">
                <p className="text-gray-700 leading-relaxed">
                  💕 We're not just your hosts - we're your friends! Our hearts
                  are full of excitement to welcome you to our beautiful
                  Tunisia. Get ready for the warmest hugs, the biggest smiles,
                  and memories that will last forever. We promise you'll leave
                  feeling like part of our family!
                </p>
              </div>
            </div>

            <div>
         
              <NextPlaceholderImage
                width={600}
                height={500}
                text="JCI Sousse community activities"
                alt="JCI Sousse community"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Partners Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A0F29]">
              Our Amazing Partners! 🤝
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're so grateful for these incredible organizations who believe
              in our mission and help make JCI EXchange possible!
            </p>
          </div>

          {/* Platinum Partners */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-8 text-[#3A67B1]">
              ✨ Platinum Partners
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
              {[1, 2, 3].map((i) => (
                <Card
                  key={i}
                  className="p-6 hover:shadow-lg transition-all hover:scale-105 bg-white"
                >
                  {/* <Image
                    src={`/placeholder.svg?height=100&width=200&query=Platinum Partner ${i}`}
                    alt={`Platinum Partner ${i}`}
                    width={200}
                    height={100}
                    className="opacity-80 hover:opacity-100 transition-opacity mx-auto"
                  /> */}
                  <NextPlaceholderImage
                    text={`Platinum Partner ${i}`}
                    alt={`Platinum Partner ${i}`}
                    width={200}
                    height={100}
                    className="opacity-80 hover:opacity-100 transition-opacity mx-auto"
                  />
                </Card>
              ))}
            </div>
          </div>

          {/* Gold Partners */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-center mb-8 text-[#EDBE38]">
              🥇 Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
              {[1, 2, 3, 4].map((i) => (
                <Card
                  key={i}
                  className="p-4 hover:shadow-md transition-all hover:scale-105 bg-white"
                >
                  <NextPlaceholderImage
                    text={`Gold Partner ${i}`}
                    alt={`Gold Partner ${i}`}
                    width={150}
                    height={80}
                    className="opacity-70 hover:opacity-100 transition-opacity mx-auto"
                  />
                </Card>
              ))}
            </div>
          </div>

          {/* Community Partners */}
          <div>
            <h3 className="text-lg font-semibold text-center mb-8 text-[#56BDA3]">
              💚 Sponsors
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                // <Image
                //   key={i}
                //   src={`/placeholder.svg?height=60&width=120&query=Community Partner ${i}`}
                //   alt={`Community Partner ${i}`}
                //   width={120}
                //   height={60}
                //   className="opacity-60 hover:opacity-90 transition-opacity"
                // />
                <NextPlaceholderImage
                  key={i}
                  text={`Partner ${i}`}
                  alt={`Community Partner ${i}`}
                  width={120}
                  height={60}
                  className="opacity-60 hover:opacity-90 transition-opacity"
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 italic">
              💕 Want to partner with us? We'd love to hear from you!
            </p>
            <Button className="mt-4 bg-[#0097D7] hover:bg-[#3A67B1] text-white">
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Hosting City Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A0F29]">
              Welcome to Beautiful Sousse! 🏖️✨
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get ready to fall in love with our magical Mediterranean city -
              where ancient history meets modern charm!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <NextPlaceholderImage
                text="Sousse Medina and coastline"
                alt="Sousse Medina and coastline"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#0A0F29]">
                Why You'll Love Sousse! 💙
              </h3>
              <div className="space-y-6">
                <Card className="p-4 border-l-4 border-l-[#0097D7] hover:shadow-md transition-all">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#0097D7]/10 rounded-full flex items-center justify-center mt-1">
                      <Building className="w-4 h-4 text-[#0097D7]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A0F29]">
                        🏛️ UNESCO World Heritage Magic
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Step into our enchanting Medina - a living museum where
                        every corner tells a story spanning over 1,000 years!
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-l-4 border-l-[#3A67B1] hover:shadow-md transition-all">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#3A67B1]/10 rounded-full flex items-center justify-center mt-1">
                      <MapPin className="w-4 h-4 text-[#3A67B1]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A0F29]">
                        🌊 Mediterranean Paradise
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Crystal blue waters, golden sandy beaches, and
                        breathtaking sunsets that will make your Instagram
                        followers jealous!
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-l-4 border-l-[#56BDA3] hover:shadow-md transition-all">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#56BDA3]/10 rounded-full flex items-center justify-center mt-1">
                      <Heart className="w-4 h-4 text-[#56BDA3]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A0F29]">
                        🤗 World-Famous Hospitality
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Our warm hearts and genuine smiles are legendary
                        throughout Tunisia - you'll feel at home from the moment
                        you arrive!
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-l-4 border-l-[#EDBE38] hover:shadow-md transition-all">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#EDBE38]/10 rounded-full flex items-center justify-center mt-1">
                      <Star className="w-4 h-4 text-[#EDBE38]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A0F29]">
                        ✨ Perfect Event Destination
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Modern facilities meet ancient charm - the ideal
                        backdrop for creating unforgettable memories with
                        friends from around the world!
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* City Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-all hover:scale-105 bg-gradient-to-br from-blue-50 to-white">
              <div className="w-16 h-16 bg-[#0097D7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-[#0097D7]" />
              </div>
              <h4 className="font-semibold text-lg mb-2 text-[#0A0F29]">
                Historic Medina
              </h4>
              <p className="text-gray-600 text-sm">
                Wander through narrow cobblestone streets filled with
                traditional crafts, aromatic spices, and centuries of history
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all hover:scale-105 bg-gradient-to-br from-teal-50 to-white">
              <div className="w-16 h-16 bg-[#56BDA3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#56BDA3]" />
              </div>
              <h4 className="font-semibold text-lg mb-2 text-[#0A0F29]">
                Port El Kantaoui
              </h4>
              <p className="text-gray-600 text-sm">
                A stunning marina resort with luxury yachts, charming cafes, and
                the perfect spot for sunset photos
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all hover:scale-105 bg-gradient-to-br from-yellow-50 to-white">
              <div className="w-16 h-16 bg-[#EDBE38]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[#EDBE38]" />
              </div>
              <h4 className="font-semibold text-lg mb-2 text-[#0A0F29]">
                Ribat Fortress
              </h4>
              <p className="text-gray-600 text-sm">
                An ancient fortress with panoramic views of the Mediterranean -
                perfect for those epic group photos!
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              🎥 Can't wait to explore? Check out what awaits you in Sousse!
            </p>
            <Button className="bg-[#56BDA3] hover:bg-[#3A67B1] text-white">
              Watch City Tour Video
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0097D7] to-[#56BDA3] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Adventure Awaits! 🚀✨
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Don't let this incredible opportunity slip away! Join hundreds of
            amazing JCI members for the experience of a lifetime in beautiful
            Tunisia. We're counting down the days until we can welcome you with
            open arms! 🤗
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-white text-[#0097D7] hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              🎉 Yes, Count Me In!
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-[#0097D7] bg-transparent rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              📋 Tell Me More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0F29] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#0097D7] rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">JCI EXchange</span>
                  <p className="text-sm text-gray-300">2025</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Uniting LOMs from around the world for networking, cultural
                exchange, and international training.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#EDBE38]">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#about"
                    className="text-gray-300 hover:text-[#0097D7] transition-colors"
                  >
                    About Event
                  </Link>
                </li>
                <li>
                  <Link
                    href="#program"
                    className="text-gray-300 hover:text-[#0097D7] transition-colors"
                  >
                    Program
                  </Link>
                </li>
                <li>
                  <Link
                    href="#offers"
                    className="text-gray-300 hover:text-[#0097D7] transition-colors"
                  >
                    Registration
                  </Link>
                </li>
                <li>
                  <Link
                    href="#sousse"
                    className="text-gray-300 hover:text-[#0097D7] transition-colors"
                  >
                    JCI Sousse
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#EDBE38]">
                Contact Info
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#56BDA3]" />
                  <span className="text-gray-300">
                    jci.sousse.ong@gmzil.com
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#56BDA3]" />
                  <span className="text-gray-300">+216 94 601 833</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#56BDA3]" />
                  <span className="text-gray-300">Sousse, Tunisia</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#EDBE38]">Follow Us</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/jci.sousse"
                  className="w-8 h-8 bg-[#0097D7] rounded-full flex items-center justify-center hover:bg-[#3A67B1] transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link
                  href="https://www.instagram.com/jcisousse"
                  className="w-8 h-8 bg-[#0097D7] rounded-full flex items-center justify-center hover:bg-[#3A67B1] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/jci-sousse-b74aa91a0/"
                  className="w-8 h-8 bg-[#0097D7] rounded-full flex items-center justify-center hover:bg-[#3A67B1] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 JCI Sousse. All rights reserved. | JCI EXchange 2025 -
              Uniting LOMs for Global Impact
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
