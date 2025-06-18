"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextReveal, Typewriter } from "@/components/ui/text-reveal";

export const AnimatedHeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        {/* Subtle floating elements instead of bright orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gray-200 rounded-full opacity-30 blur-lg" />
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-25 blur-md" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJncmF5IiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex items-center justify-center min-h-screen">
        <div className="text-center text-gray-800 max-w-4xl">
          {/* Profile Image */}
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
            <div className="relative">
              <Image
                src="/images/developer-photo.webp"
                alt="Michał Paśko - Web Developer Wrocław"
                width={180}
                height={180}
                className="rounded-full shadow-xl border-4 border-white"
                priority
              />
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Web Dev
              </div>
            </div>
          </motion.div>
          {/* Main Heading with Typewriter Effect */}
          <div className="mb-6">
            <TextReveal delay={0.5}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="text-gray-800">Web Developer Wrocław</span>
              </h1>
            </TextReveal>
            <TextReveal delay={0.8}>
              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-600">
                <Typewriter
                  text="Michał Paśko - Freelancer Programista"
                  delay={1.2}
                  speed={0.08}
                />
              </div>
            </TextReveal>
          </div>
          {/* Subtitle */}
          <TextReveal delay={1.5} direction="up">
            <p className="text-xl md:text-2xl mb-2 text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nowoczesne strony internetowe i aplikacje webowe
            </p>
            <p className="text-lg mb-8 text-gray-500 max-w-2xl mx-auto">
              WordPress • Next.js • React • 4+ lata doświadczenia
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
                  <Link href="/portfolio">Zobacz moje prace</Link>
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
