"use client";
import React from "react";

const FAQs = [
  {
    question: "Apple'ın En Güncel Teknolojileri",
    answer:
      "Swift, SwiftUI, Core Data ve Combine framework'lerinin en son sürümlerine göre hazırlanmış içeriklerle, iOS geliştirme dünyasının ihtiyaçlarına %100 uyumlu müfredat.",
  },
  {
    question: "Proje Tabanlı iOS Geliştirme",
    answer:
      "Sadece teori değil! Her modülde gerçek dünya iOS uygulamaları geliştirerek portfolyonuzu şekillendirin. App Store'a hazır projeler ile işverenlerin dikkatini çekin.",
  },
  {
    question: "iOS Topluluk ve Mentor Desteği",
    answer:
      "Türkçe iOS kaynak eksikliğini ortadan kaldıran yerel bir toplulukla, deneyimli iOS mentörleri eşliğinde sorunlarınızı anında çözün.",
  },
  {
    question: "iOS Bootcamp'e kimler katılabilir?",
    answer:
      "Swift programlama dili öğrenmek isteyen, iOS geliştirme konusunda kendini geliştirmek isteyen herkes katılabilir. Başlangıç seviyesinden ileri seviyeye kadar tüm katılımcılar için uygun müfredat hazırladık.",
  },
  {
    question: "Bootcamp süresi ne kadar?",
    answer:
      "iOS Bootcamp toplam 8 hafta sürmektedir. Haftada 3 gün, günde 2 saat canlı eğitim ile birlikte hafta sonu proje çalışmaları ve mentor desteği ile yoğun bir program sunuyoruz.",
  },
  {
    question: "Eğitim sonrası sertifika alacak mıyım?",
    answer:
      "Evet, bootcamp'i başarıyla tamamlayan katılımcılarımız Modern iOS Bootcamp sertifikası alacaklar. Bu sertifika, iOS geliştirme konusundaki yetkinliğinizi gösteren değerli bir belge olacak.",
  },
];
export function FAQsWithGrid() {
  const columns = 3;
  const faqsGrid: { question: string; answer: string }[][] = Array.from(
    { length: columns },
    () => [],
  );
  FAQs.forEach((faq, index) => {
    faqsGrid[index % columns].push(faq);
  });
  return (
    <div className="mx-auto grid max-w-7xl gap-4 px-4 py-20 md:px-8 md:py-20">
      
      <div className="mt-10 grid w-full grid-cols-1 items-start gap-4 md:grid-cols-3">
        {faqsGrid.map((faqs, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-1 items-start gap-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <div className="cursor-pointer rounded-2xl bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-neutral-900 dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] border-2 border-white hover:border-accent transition-all duration-300">
      <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
        {question}
      </h3>

      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 lg:text-base font-montserrat-mid">
        {answer}
      </p>
    </div>
  );
};
