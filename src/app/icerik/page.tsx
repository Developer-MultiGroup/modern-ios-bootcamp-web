"use client";

import FloatingActionButton from "@/components/floating-action-button";
import SessionContainer from "@/components/session-container";
import Speakers from "@/components/speakers";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import events from "@/data/events";
import { BookOpen, Check, Play, Target, Users, Video, Smartphone, Code, ArrowRight } from "lucide-react";

export default function ContentPage() {
  return (
    <section>
      {/* Hero Section */}
      <section className="min-h-screen bg-[#1c1c1c] flex flex-col justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated gradient circles */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#007AFF]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#007AFF]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#007AFF]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16 xl:px-4 pt-20 pb-16">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8 text-white text-center">
              <div className="flex flex-col items-center">
                <span>Modern iOS</span>
                <div className="flex items-center justify-center">
                  <PointerHighlight
                    rectangleClassName="bg-accent/20 border-accent/40"
                    pointerClassName="text-accent"
                  >
                    <span className="relative z-10 text-[#007AFF]">Geliştirme</span>
                  </PointerHighlight>
                </div>
              </div>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl mb-12 text-gray-300 leading-relaxed max-w-3xl font-montserrat-mid">
              SwiftUI ve Apple'ın en güncel teknolojileri ile iOS uygulama geliştirme dünyasına adım atın. 
              <span className="text-[#007AFF] font-semibold"> 40 saatlik ücretsiz bootcamp</span> ile kariyerinizi şekillendirin.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <a
                href="#konusmacilar"
                className="group bg-[#007AFF]/20 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl border border-[#007AFF]/30 hover:border-accent/50"
              >
                Konuşmacıları Keşfet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#sessions"
                className="group bg-[#007AFF]/10 backdrop-blur-md text-white hover:bg-[#007AFF]/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl border border-[#007AFF]/30 hover:border-accent/50"
              >
                Oturumları İncele
                <Code className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#141414] pb-20" id="konusmacilar">
        <div className="max-w-7xl md:max-w-[83.33%] lg:max-w-7xl 2xl:max-w-5/6 mx-auto">
          <h2 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-8 pt-20 pb-10 text-white">
            Konuşmacılırmız ile{" "}
            <span className="text-[#007AFF] underline underline-offset-3 md:no-underline decoration-[#007AFF]">
              Tanışın
            </span>
          </h2>
          <Speakers speakers={events[0].speakers} />
        </div>
      </section>

      <section className="bg-[#1a1a1a] text-white py-20 px-4">
        <div className="max-w-7xl md:max-w-[83.33%] lg:max-w-7xl 2xl:max-w-2/3 mx-auto text-center">
          <h2 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat mb-6 sm:mb-8 pb-10 text-white">
            İçeriği Kendine Göre{" "}
            <span className="text-[#007AFF] underline underline-offset-3 md:no-underline decoration-[#007AFF]">
              Şekillendir
            </span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 justify-center">
            {/* Card 1 */}
            <div className="border border-[#333] rounded-3xl p-8 relative flex flex-col justify-between w-full lg:w-1/2 bg-[#007AFF]/20 hover:border-[#007AFF]/50 transition-all duration-300 group">
              <div className="absolute top-6 right-6 w-12 h-12 bg-[#007AFF] rounded-2xl border border-[#333] flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="text-left w-5/6">
                <h3 className="text-2xl font-montserrat-semi mb-4 text-white">
                  Bootcamp Sürecine Katıl
                </h3>
                <p className="text-base font-montserrat-mid text-gray-300">
                  Bootcamp süreci boyunca bir grupla birlikte eğitim alma
                  fırsatı yakala ve süreci kendin için en verimli şekilde
                  planla.{" "}
                  <span className="font-montserrat text-[#FA7343]">
                    Bitirme projeleri, düzenli ödevler, canlı ders anlatımları
                  </span>{" "}
                  ve çok daha fazlası bu yolculukta seni bekliyor!
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 sm:gap-4">
                <a
                  href="https://youtube.com/@devmultigroup"
                  className="w-40 h-12 bg-[#0056CC] hover:bg-[#0056CC]/90 rounded-xl text-white text-base sm:text-lg font-semibold flex items-center justify-center focus:outline-none transition-all duration-300"
                  target="_blank"
                >
                  Dersler
                </a>
                <span className="h-8 w-px bg-[#333] mx-1 sm:mx-2" />
                <span className="font-bold text-lg sm:text-xl text-[#FA7343]">#Bootcamp</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-[#333] rounded-3xl p-8 relative flex flex-col justify-between w-full lg:w-1/2 bg-[#007AFF]/20 hover:border-[#007AFF]/50 transition-all duration-300 group">
              <div className="absolute top-6 right-6 w-12 h-12 bg-[#007AFF] border border-[#333] rounded-2xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-left w-5/6">
                <h3 className="text-2xl font-montserrat-semi mb-4 text-white">
                  Kaynakça olarak Kullan
                </h3>
                <p className="text-base font-montserrat-mid text-gray-300">
                  Bootcamp süreci boyunca bir grupla birlikte eğitim alma
                  fırsatı yakala ve süreci kendin için en verimli şekilde
                  planla.{" "}
                  <span className="font-montserrat text-[#FA7343]">
                    Bitirme projeleri, düzenli ödevler, canlı ders anlatımları
                  </span>{" "}
                  ve çok daha fazlası bu yolculukta seni bekliyor!
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 sm:gap-4">
                <a
                  href="/kaynaklar"
                  className="w-40 h-12 bg-[#0056CC] hover:bg-[#0056CC]/90 rounded-xl text-white text-base sm:text-lg font-semibold flex items-center justify-center focus:outline-none transition-all duration-300"
                >
                  Kaynaklar
                </a>
                <span className="h-8 w-px bg-[#333] mx-1 sm:mx-2" />
                <span className="font-bold text-lg sm:text-xl text-[#FA7343]">#Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#141414] font-montserrat-mid pb-20">
        <div className="mx-auto">
          <h2 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat mb-6 sm:mb-8 pt-20 pb-10 text-white">
            Hangi Oturumlara Katılacağını{" "}
            <span className="text-[#007AFF] underline underline-offset-3 md:no-underline decoration-[#007AFF]">
              Seç
            </span>
          </h2>
          <SessionContainer event={events[0]} />
        </div>
      </section>

      <section className="flex flex-col justify-center align-middle items-center w-full py-16 bg-[#1a1a1a] px-4 md:px-0">
        <div className="max-w-7xl md:max-w-[83.33%] lg:w-7xl mx-auto w-full">
          <h2 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-8 py-10 text-white">
            iOS Geliştirme Yolculuğuna{" "}
            <span className="text-[#007AFF] underline underline-offset-3 md:no-underline decoration-[#007AFF]">
              Başla
            </span>
          </h2>

          {/* Main content container */}
          <div className="rounded-3xl flex flex-col md:flex-row overflow-hidden bg-[#007AFF]/20 font-montserrat-mid border border-[#333] hover:border-[#007AFF]/50 transition-all duration-300">
            {/* Left section */}
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4 font-montserrat-semi text-white">
                Bu Heyecan Verici Macerada Yerini Ayırt
              </h2>
              <p className="text-lg mb-6 text-gray-300">
                Eğer içerik ilgini çektiyse hemen yerini ayırt ve sen de bize
                katıl!
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Play className="mt-1 flex-shrink-0 text-[#007AFF]" size={24} />
                  <p className="text-gray-300">Canlı anlatım ile daha verimli bir süreç geçir</p>
                </div>
                <div className="flex items-start space-x-4">
                  <Video className="mt-1 flex-shrink-0 text-[#007AFF]" size={24} />
                  <p className="text-gray-300">Video kayıtları ile kaçırdığın kısımları tekrar et</p>
                </div>
                <div className="flex items-start space-x-4">
                  <BookOpen className="mt-1 flex-shrink-0 text-[#007AFF]" size={24} />
                  <p className="text-gray-300">Ders içi kaynaklar ile daha sağlam temel at</p>
                </div>
                <div className="flex items-start space-x-4">
                  <Target className="mt-1 flex-shrink-0 text-[#007AFF]" size={24} />
                  <p className="text-gray-300">Uygulama projeleri ile öğrendiklerini pekiştir</p>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="mt-1 flex-shrink-0 text-[#007AFF]" size={24} />
                  <p className="text-gray-300">Danışmanlara soru cevaplar ile daha hızlı ilerle</p>
                </div>
              </div>
            </div>

            {/* Right section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 border-l border-[#333]">
              <div className="bg-[#141414] rounded-lg p-4 text-center mb-6 border-2 border-[#333]">
                <h3 className="text-xl font-bold text-white">Sizi Bekleyen İçerikler</h3>
              </div>

              <p className="mb-6 text-gray-300">
                Detaylıca hazırlanmış ve kolay takip edilebilir uygulama odaklı
                bir eğitim serisi
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 space-y-4 gap-4">
                <div className="flex items-center space-x-2">
                  <Check className="text-[#FA7343]" size={24} />
                  <span className="text-gray-300">500+ Katılımcı</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="text-[#FA7343]" size={24} />
                  <span className="text-gray-300">200+ Kaynakça</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="text-[#FA7343]" size={24} />
                  <span className="text-gray-300">40+ Saat Eğitim</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="text-[#FA7343]" size={24} />
                  <span className="text-gray-300">20+ Uzman Konuk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="text-[#FA7343]" size={24} />
                  <span className="text-gray-300">5 Etkinlik Danışmanı</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="text-[#FA7343]" size={24} />
                  <span className="text-gray-300">5 Uygulama projesi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="text-[#FA7343]" size={24} />
                  <span className="text-gray-300">5 CodeChallenges</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="text-[#FA7343]" size={24} />
                  <span className="text-gray-300">1 Bitirme Projesi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="text-[#FA7343]" size={24} />
                  <span className="text-gray-300">5 CodeChallenges</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="text-[#FA7343]" size={24} />
                  <span className="text-gray-300">1 Bitirme Projesi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FloatingActionButton alwaysShow={false} />
    </section>
  );
}
