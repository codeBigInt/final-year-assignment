import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Facebook, Instagram, Leaf, Mail, MapPin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DonationModal } from "@/components/donation-modal"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full lg:px-20 px-6 flex h-16 items-center justify-between">
          <div className="flex items-cent er gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">WildNigeria</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="#wildlife" className="text-sm font-medium transition-colors hover:text-primary">
              Wildlife
            </Link>
            <Link href="#get-involved" className="text-sm font-medium transition-colors hover:text-primary">
              Get Involved
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <DonationModal />
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/turtle.jpg?height=800&width=1920"
              alt="Nigerian wildlife"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="w-full relative z-10 flex min-h-[600px] flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Preserving Nigeria&apos;s Natural Heritage
            </h1>
            <p className="mt-4 max-w-[700px] text-lg text-gray-200 md:text-xl">
              Join our mission to protect and conserve Nigeria&apos;s diverse wildlife and ecosystems for future
              generations.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Support Our Cause
              </Button>
              <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/20 hover:text-white">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="w-full lg:px-20 px-6">
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="flex-1 space-y-4">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Our Mission</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Protecting Nigeria&apos;s Biodiversity
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  WildNigeria is dedicated to the conservation of Nigeria&apos;s rich biodiversity through research,
                  education, community engagement, and sustainable development initiatives. Our work spans across
                  Nigeria&apos;s diverse ecosystems, from the savannahs to the rainforests.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Leaf className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Habitat preservation and restoration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Leaf className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Anti-poaching initiatives</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Leaf className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Community-based conservation programs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Leaf className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Wildlife research and monitoring</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="relative h-[400px] overflow-hidden rounded-xl">
                  <Image
                    src="/meer.jpg?height=400&width=600"
                    alt="Conservation work"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-slate-50 py-16 md:py-24">
          <div className="w-full lg:px-20 px-6">
            <div className="mx-auto max-w-[800px] text-center">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Our Projects</div>
              <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Conservation Initiatives
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Explore our ongoing projects aimed at protecting Nigeria&apos;s wildlife and natural habitats through
                sustainable practices and community involvement.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="relative h-[200px] w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/cross-river-gorilla-endangered.jpeg?height=200&width=400"
                      alt="Rainforest conservation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle>Cross River Gorilla Conservation</CardTitle>
                  <CardDescription className="mt-2">
                    Protecting the critically endangered Cross River gorilla through habitat conservation and
                    anti-poaching efforts.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="relative h-[200px] w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/yankari.webp?height=200&width=400"
                      alt="Savannah conservation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle>Yankari Game Reserve Protection</CardTitle>
                  <CardDescription className="mt-2">
                    Supporting Nigeria&apos;s largest wildlife park and its elephant population through community-based
                    conservation.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="relative h-[200px] w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/mangrove.jpg?height=200&width=400"
                      alt="Marine conservation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle>Niger Delta Mangrove Restoration</CardTitle>
                  <CardDescription className="mt-2">
                    Restoring vital mangrove ecosystems in the Niger Delta to protect marine biodiversity and support
                    local communities.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="wildlife" className="py-16 md:py-24">
          <div className="w-full lg:px-20 px-6">
            <div className="mx-auto max-w-[800px] text-center">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Wildlife</div>
              <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Nigeria&apos;s Incredible Biodiversity
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Nigeria is home to a remarkable variety of wildlife, from endangered primates to majestic elephants and
                hundreds of bird species.
              </p>
            </div>

            <Tabs defaultValue="mammals" className="mt-12">
              <TabsList className="mx-auto grid max-w-[600px] grid-cols-3">
                <TabsTrigger value="mammals">Mammals</TabsTrigger>
                <TabsTrigger value="birds">Birds</TabsTrigger>
                <TabsTrigger value="reptiles">Reptiles</TabsTrigger>
              </TabsList>
              <TabsContent value="mammals" className="mt-6">
                <div className="grid gap-6 md:grid-cols-4">
                  {[
                    { img: "/gorillaorg-crossriver-gorilla-main.jpg", name: "Cross River Gorilla", status: "Critically Endangered" },
                    { img: "/chimpazee.jpg", name: "Nigerian-Cameroon Chimpanzee", status: "Endangered" },
                    { img: "/forest-elephant.jpg", name: "African Forest Elephant", status: "Critically Endangered" },
                    { img: "/lions.jpg", name: "Lion", status: "Vulnerable" },
                    { img: "/leo.jpg", name: "Leopard", status: "Vulnerable" },
                    { img: "/drill_lucy.jpg", name: "Drill Monkey", status: "Endangered" },
                    { img: "/colobus.jpg", name: "Preuss's Red Colobus", status: "Critically Endangered" },
                    { img: "/manatee2.jpg", name: "African Manatee", status: "Vulnerable" },
                  ].map((animal, index) => (
                    <Card key={index}>
                      <CardHeader className="p-4">
                        <div className="relative h-[150px] w-full overflow-hidden rounded-lg">
                          <Image
                            src={`${animal.img}?height=150&width=200`}
                            alt={animal.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <CardTitle className="text-base">{animal.name}</CardTitle>
                        <CardDescription className="text-xs">
                          <span className="text-red-500 font-medium">{animal.status}</span>
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="birds" className="mt-6">
                <div className="grid gap-6 md:grid-cols-4">
                  {[
                    { img: "/ibadan.jpg", name: "Ibadan Malimbe", status: "Endangered" },
                    { img: "/guinea.jpg", name: "White-throated Guineafowl", status: "Vulnerable" },
                    { img: "/parrot.jpg", name: "Grey Parrot", status: "Endangered" },
                    { img: "/vulture.jpg", name: "Hooded Vulture", status: "Critically Endangered" },
                    { img: "/horn.jpg", name: "Yellow-casqued Hornbill", status: "Vulnerable" },
                    { img: "/crown.jpg", name: "Black Crowned Crane", status: "Vulnerable" },
                    { img: "/finc.jpg", name: "Rock Firefinch", status: "Near Threatened" },
                    { img: "/waxbill.jpg", name: "Anambra Waxbill", status: "Vulnerable" },
                  ].map((animal, index) => (
                    <Card key={index}>
                      <CardHeader className="p-4">
                        <div className="relative h-[150px] w-full overflow-hidden rounded-lg">
                          <Image
                            src={`${animal.img}?height=150&width=200`}
                            alt={animal.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <CardTitle className="text-base">{animal.name}</CardTitle>
                        <CardDescription className="text-xs">
                          <span className="text-red-500 font-medium">{animal.status}</span>
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="reptiles" className="mt-6">
                <div className="grid gap-6 md:grid-cols-4">
                  {[
                    { img: "/slender.jpg", name: "West African Slender-snouted Crocodile", status: "Critically Endangered" },
                    { img: "/nile.jpg", name: "Nile Crocodile", status: "Least Concern" },
                    { img: "/python.jpg", name: "African Rock Python", status: "Least Concern" },
                    { img: "/tortise.jpg", name: "Home's Hinge-back Tortoise", status: "Vulnerable" },
                    { img: "/viper.jpg", name: "Gaboon Viper", status: "Least Concern" },
                    { img: "/cobra.jpg", name: "Black-necked Spitting Cobra", status: "Least Concern" },
                    { img: "/dwarf.jpg", name: "West African Dwarf Crocodile", status: "Vulnerable" },
                    { img: "/turtle-soft.jpg", name: "African Softshell Turtle", status: "Vulnerable" },
                  ].map((animal, index) => (
                    <Card key={index}>
                      <CardHeader className="p-4">
                        <div className="relative h-[150px] w-full overflow-hidden rounded-lg">
                          <Image
                            src={`${animal.img}?height=150&width=200`}
                            alt={animal.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <CardTitle className="text-base">{animal.name}</CardTitle>
                        <CardDescription className="text-xs">
                          <span className="text-red-500 font-medium">{animal.status}</span>
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="get-involved" className="bg-green-50 py-16 md:py-24">
          <div className="w-full lg:px-20 px-6">
            <div className="mx-auto max-w-[800px] text-center">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Get Involved</div>
              <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Our Conservation Efforts
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                There are many ways to support wildlife conservation in Nigeria. Your contribution can make a real
                difference.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-2">
                      <Leaf className="h-5 w-5 text-green-600" />
                    </div>
                    Donate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your financial support helps fund our conservation projects, research initiatives, and community
                    programs.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Make a Donation</Button>
                </CardFooter>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-2">
                      <Leaf className="h-5 w-5 text-green-600" />
                    </div>
                    Volunteer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Join our team in the field or remotely. We have opportunities for people with various skills and
                    interests.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Become a Volunteer
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-2">
                      <Leaf className="h-5 w-5 text-green-600" />
                    </div>
                    Spread Awareness
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Help raise awareness about Nigeria&apos;s wildlife by sharing our content and educating others about
                    conservation.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Share Our Mission
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="w-full lg:px-20 px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Contact Us</div>
                <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
                <p className="mt-4 text-muted-foreground">
                  Have questions or want to learn more about our conservation efforts? Reach out to us.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <span>123 Conservation Way, Lagos, Nigeria</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-green-600" />
                    <span>info@wildnigeria.org</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium">Follow Us</h3>
                  <div className="mt-4 flex gap-4">
                    <Link href="#" className="rounded-full bg-green-100 p-2 text-green-600 hover:bg-green-200">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="rounded-full bg-green-100 p-2 text-green-600 hover:bg-green-200">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="rounded-full bg-green-100 p-2 text-green-600 hover:bg-green-200">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <form className="rounded-xl border bg-card p-6 shadow-sm">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your message"
                      />
                    </div>
                    <Button className="bg-green-600 hover:bg-green-700">Send Message</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-green-900 py-16 text-white">
          <div className="w-full lg:px-20 px-6">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="max-w-[500px]">
                <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
                <p className="mt-2 text-green-100">
                  Stay updated with our conservation efforts, wildlife news, and upcoming events.
                </p>
              </div>
              <div className="w-full max-w-[500px]">
                <form className="flex gap-2">
                  <Input
                    placeholder="Enter your email"
                    className="bg-green-800 border-green-700 text-white placeholder:text-green-300"
                  />
                  <Button className="bg-white text-green-900 hover:bg-green-100">
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-slate-50">
        <div className="w-full lg:px-20 px-6 py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-green-600" />
                <span className="text-xl font-bold">WildNigeria</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Dedicated to the conservation of Nigeria&apos;s wildlife and natural habitats through research,
                education, and community engagement.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#about" className="text-sm text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary">
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link href="#wildlife" className="text-sm text-muted-foreground hover:text-primary">
                    Wildlife
                  </Link>
                </li>
                <li>
                  <Link href="#get-involved" className="text-sm text-muted-foreground hover:text-primary">
                    Get Involved
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Research Papers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Educational Materials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Annual Reports
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Press Releases
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t pt-8">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} WildNigeria. Made with ❤️ by Lucky Elliot.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

