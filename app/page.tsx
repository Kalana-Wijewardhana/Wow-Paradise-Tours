"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Star, Phone, Mail, Menu, X, Users, Award, Shield, Heart } from "lucide-react"
import { useState } from "react"

const itineraries = [
  {
    id: 1,
    title: "One Day Tour - Negombo",
    location: "Negombo",
    duration: "8 hours",
    price: "$75",
    rating: 4.8,
    image: "/negombo-beach-palms.png",
    highlights: ["Negombo Fish Market", "Catfish Aquarium", "Angurukaramulla Temple", "Negombo Beach Park"],
    facilities: ["Beach Chalet", "Negombo Lagoon"],
  },
  {
    id: 2,
    title: "One Day Tour - Colombo",
    location: "Colombo",
    duration: "10 hours",
    price: "$85",
    rating: 4.9,
    image: "/colombo.jpg",
    highlights: ["Gangaramaya Temple", "Beira Lake", "Independence Square", "Galle Face Green"],
    facilities: ["Old Colombo Lighthouse", "Port of Colombo", "Red Mosque"],
  },
  {
    id: 3,
    title: "One Day Tour - Sigiriya and Dambulla",
    location: "Sigiriya",
    duration: "12 hours",
    price: "$120",
    rating: 4.9,
    image: "/sigiriya-fortress.png",
    highlights: ["Golden Temple of Dambulla", "Sigiriya Rock Fortress", "Elephant Riding", "Spice Garden"],
    facilities: ["Cave Temple", "Royal Gardens", "Water Gardens"],
  },
  {
    id: 4,
    title: "One Day Tour - Kandy",
    location: "Kandy",
    duration: "10 hours",
    price: "$95",
    rating: 4.7,
    image: "/kandy-temple-lake-mountains.png",
    highlights: ["Pinnawala Elephant Orphanage", "Tea Factory", "Kandy Lake and Temple", "Royal Botanical Gardens"],
    facilities: ["Temple of Sacred Tooth Relic", "Kandy Cultural Centre"],
  },
  {
    id: 5,
    title: "One Day Tour - Kitulgala Water Rafting",
    location: "Kitulgala",
    duration: "8 hours",
    price: "$110",
    rating: 4.6,
    image: "/sri-lanka-rafting.png",
    highlights: ["White Water Rafting", "Belilena Cave", "Kitulgala Suspension Bridge"],
    facilities: ["Adventure Sports", "River Activities"],
  },
  {
    id: 6,
    title: "One Day Tour - Galle",
    location: "Galle",
    duration: "9 hours",
    price: "$90",
    rating: 4.8,
    image: "/galle-fort-colonial-ocean.png",
    highlights: ["Galle Fort and Lighthouse", "Stilt Fishermen", "Turtle Hatchery"],
    facilities: ["Historic Fort", "Coastal Views"],
  },
  {
    id: 7,
    title: "One Day Tour - Wilpattu National Park Safari",
    location: "Wilpattu",
    duration: "11 hours",
    price: "$130",
    rating: 4.9,
    image: "/sri-lanka-leopard-safari.png",
    highlights: ["Wilpattu National Park Safari", "Wildlife Spotting", "Mangrove Swamps"],
    facilities: ["Safari Jeep", "Wildlife Guide"],
  },
]

const destinations = ["Negombo", "Colombo", "Sigiriya and Dambulla", "Kandy", "Galle", "Wilpattu National Park"]

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-900 backdrop-blur-md bg-opacity-95 text-white shadow-2xl sticky top-0 z-50 border-b border-white/10"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold font-[family-name:var(--font-work-sans)]">Wow Paradise Tours</h1>
                <p className="text-sm opacity-80">Discover Paradise</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="hover:text-amber-400 transition-all duration-300 hover:scale-105 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#about"
                className="hover:text-amber-400 transition-all duration-300 hover:scale-105 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#itineraries"
                className="hover:text-amber-400 transition-all duration-300 hover:scale-105 relative group"
              >
                Itineraries
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="hover:text-amber-400 transition-all duration-300 hover:scale-105 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4 text-sm bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="flex items-center space-x-1 hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+94 77 123 4567</span>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="flex items-center space-x-1 hover:text-amber-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@wowparadisetours.com</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-white/20 bg-white/5 backdrop-blur-sm rounded-lg"
            >
              <div className="flex flex-col space-y-2 mt-4 px-4">
                <a href="#home" className="hover:text-amber-400 transition-colors py-2 hover:bg-white/10 rounded px-2">
                  Home
                </a>
                <a href="#about" className="hover:text-amber-400 transition-colors py-2 hover:bg-white/10 rounded px-2">
                  About
                </a>
                <a
                  href="#itineraries"
                  className="hover:text-amber-400 transition-colors py-2 hover:bg-white/10 rounded px-2"
                >
                  Itineraries
                </a>
                <a
                  href="#contact"
                  className="hover:text-amber-400 transition-colors py-2 hover:bg-white/10 rounded px-2"
                >
                  Contact
                </a>
              </div>
            </motion.nav>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/tropical-island-paradise.png')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/60 via-emerald-800/40 to-cyan-900/60"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center text-white px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-work-sans)]"
          >
            One Day Itineraries
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Explore the most beautiful destinations with our carefully crafted day tours
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Explore Tours
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Destinations Filter */}
      <section className="py-8 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {destinations.map((destination, index) => (
              <motion.div
                key={destination}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Badge
                  variant="outline"
                  className="text-sm px-4 py-2 cursor-pointer bg-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg border border-emerald-200"
                >
                  <MapPin className="w-4 h-4 mr-1" />
                  {destination}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-work-sans)] text-emerald-900">
              About Wow Paradise Tours
            </h2>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
              Your gateway to discovering the breathtaking beauty and rich culture of Sri Lanka through unforgettable
              day adventures
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: Users, title: "Expert Guides", desc: "Local experts with deep knowledge" },
              { icon: Award, title: "Award Winning", desc: "Recognized for excellence in tourism" },
              { icon: Shield, title: "Safe & Secure", desc: "Your safety is our top priority" },
              { icon: Heart, title: "Memorable Experiences", desc: "Creating lifelong memories" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-emerald-900">{feature.title}</h3>
                <p className="text-emerald-700">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-emerald-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-900">Our Story</h3>
                <p className="text-emerald-700 mb-4">
                  Founded with a passion for showcasing Sri Lanka's incredible diversity, Wow Paradise Tours has been
                  creating extraordinary experiences for travelers from around the world. Our carefully curated day
                  tours combine adventure, culture, and natural beauty.
                </p>
                <p className="text-emerald-700">
                  From ancient temples to pristine beaches, from wildlife safaris to cultural immersions, we ensure
                  every moment of your journey is filled with wonder and discovery.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/sri-lanka-temple-nature.png"
                  alt="Sri Lanka landscape"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Itineraries Section */}
      <section id="itineraries" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-work-sans)] text-emerald-900">
              Our Day Tours
            </h2>
            <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
              Choose from our selection of carefully planned one-day adventures
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itineraries.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 border-emerald-100">
                  <div className="relative overflow-hidden">
                    <img
                      src={tour.image || "/placeholder.svg"}
                      alt={tour.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        {tour.rating}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="font-[family-name:var(--font-work-sans)] text-xl text-emerald-900">
                      {tour.title}
                    </CardTitle>
                    <CardDescription className="flex items-center justify-between text-emerald-600">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {tour.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {tour.duration}
                      </span>
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-emerald-900">Highlights:</h4>
                        <ul className="text-sm text-emerald-700 space-y-1">
                          {tour.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-emerald-900">Facilities:</h4>
                        <div className="flex flex-wrap gap-1">
                          {tour.facilities.map((facility, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-emerald-200 text-emerald-700">
                              {facility}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-emerald-100">
                        <div className="text-2xl font-bold text-emerald-600 font-[family-name:var(--font-work-sans)]">
                          {tour.price}
                        </div>
                        <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                          Inquire
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 font-[family-name:var(--font-work-sans)] text-emerald-900">
              Top Picks for You
            </h2>
            <p className="text-xl text-emerald-700">Our most popular destinations and experiences</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Sigiriya Rock", image: "/sigiriya-sunset.png" },
              { name: "Kandy Temple", image: "/kandy-temple-golden.png" },
              { name: "Galle Fort", image: "/GalleFort.jpg" },
              { name: "Safari Adventure", image: "/saffari.jpg" },
            ].map((pick, index) => (
              <motion.div
                key={pick.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-xl cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={pick.image || "/placeholder.svg"}
                  alt={pick.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-work-sans)]">{pick.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-work-sans)]">
              Get In Touch
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Ready to embark on your Sri Lankan adventure? Contact us to plan your perfect day tour
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="opacity-90">+94 77 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="opacity-90">info@wowparadisetours.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="opacity-90">Colombo, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-2 opacity-90">
                  <li>• Expert local guides with extensive knowledge</li>
                  <li>• Small group sizes for personalized experiences</li>
                  <li>• Flexible itineraries to match your interests</li>
                  <li>• Competitive pricing with no hidden costs</li>
                  <li>• 24/7 customer support during your tour</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tour Interest</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                    <option value="">Select a tour</option>
                    <option value="sigiriya">Sigiriya & Dambulla</option>
                    <option value="kandy">Kandy City Tour</option>
                    <option value="galle">Galle Fort</option>
                    <option value="safari">Safari Adventure</option>
                    <option value="custom">Custom Tour</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Tell us about your travel plans..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3 text-lg font-semibold">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-work-sans)]">Wow Paradise Tours</h3>
              </div>
              <p className="text-sm opacity-80">
                Discover the beauty of Sri Lanka with our expertly crafted day tours and unforgettable experiences.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#home" className="hover:text-amber-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-amber-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#itineraries" className="hover:text-amber-400 transition-colors">
                    Itineraries
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-amber-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Popular Tours</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Sigiriya & Dambulla
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Kandy City Tour
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Galle Fort
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Safari Adventure
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+94 77 123 4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@wowparadisetours.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 Wow Paradise Tours. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
