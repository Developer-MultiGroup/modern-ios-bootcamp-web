"use client";

import { useEffect, useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import FloatingActionButton from "@/components/floating-action-button";
import SponsorSlider from "@/components/sponsor-slider";
import events from "@/data/events";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/moving-border";
import { StatsWithNumberTicker } from "@/components/ui/stats-with-ticker";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { FAQsWithGrid } from "@/components/ui/faq";
import { IOSBootcampBentoGrid } from "@/components/ui/bento-grid";

const bootcampBenefits = [
  {
    title: "Apple'ın En Güncel Teknolojileri",
    content:
      "Swift, SwiftUI, Core Data ve Combine framework'lerinin en son sürümlerine göre hazırlanmış içeriklerle, iOS geliştirme dünyasının ihtiyaçlarına %100 uyumlu müfredat.",
  },
  {
    title: "Proje Tabanlı iOS Geliştirme",
    content:
      "Sadece teori değil! Her modülde gerçek dünya iOS uygulamaları geliştirerek portfolyonuzu şekillendirin. App Store'a hazır projeler ile işverenlerin dikkatini çekin.",
  },
  {
    title: "iOS Topluluk ve Mentor Desteği",
    content:
      "Türkçe iOS kaynak eksikliğini ortadan kaldıran yerel bir toplulukla, deneyimli iOS mentörleri eşliğinde sorunlarınızı anında çözün.",
  },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  // Hide the scroll indicator when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const element = document.getElementById("main");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section - Responsive for all devices */}
      <section className="min-h-screen bg-[url('/images/modern-ios-hero.webp')] bg-cover bg-center flex flex-col items-center justify-center text-white relative px-4 sm:px-6 md:px-8">
        {/* Blur overlay */}
        <div className="absolute inset-0 bg-[url('/images/modern-ios-hero.webp')] bg-cover bg-center blur-sm"></div>
        {/* Content overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-tan-nimbus text-center leading-tight sm:leading-snug">
            <span className="text-secondary">Modern iOS</span> Bootcamp
          </h1>
          <p className="mb-8 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-montserrat-mid text-center text-accent">
            <FlipWords
              words={[
                "Swift & SwiftUI",
                "iOS App Development",
                "Apple Ecosystem",
                "Mobile Development",
              ]}
              className="text-white"
            />
          </p>

          <a
            href="https://lodos.sh/gdX2622AtC"
            target="_blank"
            className="hover:cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <Button className="text-white bg-transparent">Hemen Kaydol</Button>
          </a>
        </div>

        {/* Scroll Animation */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* <p className="text-base sm:text-lg md:text-xl mb-2 text-secondary font-montserrat-mid">
            Öğrenmeye Başla
          </p> */}
          <div className="animate-bounce bg-primary rounded-full p-2">
            <ChevronDownIcon
              onClick={handleScroll}
              className="hover:cursor-pointer h-5 w-5 sm:h-8 sm:w-8 text-[#1C1C1C]"
            />
          </div>
        </div>
      </section>

      <span id="main" />
      <SponsorSlider sponsors={events[0].sponsors} />

      {/* Main Content Section */}
      <div className="bg-background">
        {/* iOS Bootcamp Info Section */}
        <section className="bg-background">
          {/* Stats Section */}
          <StatsWithNumberTicker />
          {/* iOS Bootcamp Bento Grid Section */}
          <IOSBootcampBentoGrid />
        </section>

        {/* Live Coding Title Section */}
        <section className="relative pt-12 sm:pt-16 md:pt-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-neutral-800 dark:text-white">
              Canlı iOS Kodlama ile{" "}
              <span className="text-accent">%80 Daha Kalıcı</span> Öğrenin!
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed px-2 sm:px-0 font-montserrat-mid">
              Canlı ve online iOS eğitimlerle yalnızca bilgi edinmekle kalmayın;
              Swift ve SwiftUI eğitimini, anında sorular sorarak size özel hale getirin.
            </p>
            <div className="mt-4 sm:mt-6 md:mt-8">
              <Button className="bg-accent text-white hover:bg-accent/90 transition-all duration-300 text-sm sm:text-base">
                <a
                  href="https://docs.google.com/spreadsheets/d/1hsckdhSJrvN6VG0NfO2lghY0A8bSjqhGYnNATGPWzcc/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium"
                >
                  Eğitimler
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Macbook Scroll Section */}
        <section className="relative overflow-hidden py-4 sm:py-8 md:py-12">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10"></div>
          <div className="relative z-20">
            <MacbookScroll
              src="/images/live.webp"
              showGradient={true}
            />
          </div>
        </section>

        {/* Apple Content Section */}
        <section className="bg-[#F8F9FB]">
          <div className="max-w-7xl mx-auto py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-36">
              {/* Apple Text */}
              <div className="flex flex-col justify-center">
                <h2
                  style={{ fontFamily: "Open Sans", fontWeight: "800" }}
                  className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center md:text-left"
                >
                  {/* 4 eşit satır */}
                  <div className="block leading-snug">
                    <span className="text-accent font-bold">Swift</span>
                    <span className="text-black dark:text-white ml-2">
                      ile Modern
                    </span>
                  </div>
                  <div className="block leading-snug">
                    <span className="text-black dark:text-white">
                      iOS Geliştirme
                    </span>
                  </div>
                  <div className="block leading-snug">
                    <span className="text-accent">Yolculuğunuza</span>
                  </div>
                  <div className="block leading-snug">
                    <span className="text-black dark:text-white">
                      Başlayın!
                    </span>
                  </div>
                  <div className="text-sm sm:text-md md:text-lg lg:text-xl font-light pt-6 block">
                    Apple'ın en güncel teknolojileri ve SwiftUI framework'ü ile
                    iOS geliştirme dünyasına adım atın. Modern ve kullanıcı
                    dostu uygulamalar geliştirmenin sırlarını keşfedin!
                  </div>
                </h2>
              </div>

              {/* Topics Grid */}
              <div className="flex flex-col gap-y-4">
                {[
                  {
                    number: "Unit 1",
                    title: "Swift Fundamentals",
                    description:
                      "Begin your iOS development journey with Swift programming language fundamentals and Xcode basics.",
                  },
                  {
                    number: "Unit 2",
                    title: "SwiftUI Universe",
                    description:
                      "Explore modern UI development with SwiftUI framework and Apple's Human Interface Guidelines.",
                  },
                  {
                    number: "Unit 3",
                    title: "Core Data & APIs",
                    description:
                      "Master data persistence with Core Data and network operations using URLSession and Combine.",
                  },
                  {
                    number: "Unit 4",
                    title: "App Store Ready",
                    description:
                      "Advanced iOS patterns, testing with XCTest, performance optimization, and App Store deployment.",
                  },
                ].map((unit, index) => (
                  <div
                    key={index}
                    className="bg-background border-2 hover:border-accent rounded-xl p-6 shadow-sm hover:shadow-md group transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="pt-0 mt-0 flex-shrink-0">
                        <img
                          src="/swiftui-icon.svg"
                          alt="SwiftUI Icon"
                          className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:rotate-90"
                        />
                      </div>
                      <div className="space-y-2 font-montserrat-mid pt-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold transition-all duration-300 relative">
                            {unit.title}
                          </h3>
                          <div className="text-sm  ml-2 group-hover:text-accent transition-all duration-300">
                            {unit.number}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {unit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl px-4 sm:px-6 md:px-8 mx-auto py-12 sm:py-18 md:py-24">
          <h2 className="text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
            <span className="text-black dark:text-white">Kısaca </span>
            <span className="text-accent ">6</span>
            <span className="text-black dark:text-white"> Madde ile </span>
            <span className="text-accent ">
              Neden Bu Bootcamp'e Katılmalısın?
            </span>
          </h2>

          {/* Benefits Cards - Responsive Grid */}
          <FAQsWithGrid />
        </section>
      </div>
      <SponsorSlider sponsors={events[0].sponsors} />
      <FloatingActionButton alwaysShow={false} />
    </>
  );
}
