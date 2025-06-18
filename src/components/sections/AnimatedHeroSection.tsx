"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { FloatingElements, GlowingOrb } from "@/components/ui/floating-elements";
import { TextReveal, Typewriter } from "@/components/ui/text-reveal";

export const AnimatedHeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <AnimatedGradient className="absolute inset-0">
        {/* Floating Orbs */}
        <GlowingOrb 
          size="lg" 
          color="blue" 
          className="absolute top-20 left-10 opacity-30" 
        />
        <GlowingOrb 
          size="md" 
          color="purple" 
          className="absolute top-40 right-20 opacity-40" 
        />
        <GlowingOrb 
          size="sm" 
          color="pink" 
          className="absolute bottom-20 left-1/4 opacity-25" 
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4=')] opacity-20" />
      </AnimatedGradient>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex items-center justify-center min-h-screen">
        <div className="text-center text-white max-w-4xl">
          {/* Profile Image */}
          <FloatingElements>
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.2,
              }}
              className="relative inline-block mb-8"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 animate-pulse" />
              <Image
                src="/images/developer-photo.webp"
                alt="Michał Paśko - Web Developer Wrocław"
                width={300}
                height={300}
                priority
                className="relative rounded-full ring-4 ring-white/20 backdrop-blur-sm"
              />
            </motion.div>
          </FloatingElements>

          {/* Main Heading with Typewriter Effect */}
          <div className="mb-6">
            <TextReveal delay={0.5}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-200">
                  Michał Paśko
                </span>
              </h1>
            </TextReveal>
            <TextReveal delay={0.8}>
              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-100">
                <Typewriter 
                  text="Web Developer Wrocław" 
                  delay={1.2}
                  speed={0.08}
                />
              </div>
            </TextReveal>
          </div>

          {/* Subtitle */}
          <TextReveal delay={1.5} direction="up">
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Tworzę profesjonalne strony internetowe, które sprzedają
            </p>
          </TextReveal>

          {/* CTA Buttons */}
          <TextReveal delay={2} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold"
                >
                  <Link href="#kontakt" scroll={false}>
                    Porozmawiajmy o Twoim projekcie
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm shadow-xl px-8 py-4 text-lg font-semibold"
                >
                  <Link href="/portfolio">
                    Zobacz moje prace
                  </Link>
                </Button>
              </motion.div>
            </div>
          </TextReveal>

          {/* Scroll Indicator */}
          <TextReveal delay={2.5}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-1 h-3 bg-white/60 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </TextReveal>
        </div>
      </div>
    </section>
  );
};
