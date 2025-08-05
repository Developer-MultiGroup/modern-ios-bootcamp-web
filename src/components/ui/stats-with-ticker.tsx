"use client";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

export function StatsWithNumberTicker() {
  const items = [
    {
      description:
        "Katılım başvurusu alınan iOS geliştirici adayı sayısı.",
      value: 500,
      subtext: "+",
    },
    {
      description: "iOS bootcamp'e katılan özel konuk ve mentor sayısı.",
      value: 100,
      subtext: "+",
    },
    {
      description:
        "Topluluk destekçisi ve sponsor sayısı.",
      value: 150,
      subtext: "+",
    },
    {
      description: "iOS geliştirme konusunda uzman konuşmacı sayısı.",
      value: 30,
      subtext: "+",
    },
  ];
  return (
    <section className="group/container relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl p-10 py-20">
      <div className="relative z-20">
        <h2 className="text-center text-xl font-bold text-neutral-700 md:text-3xl dark:text-neutral-100">
          Modern iOS Bootcamp İstatistikleri
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-neutral-800 md:text-base dark:text-neutral-200 font-montserrat-mid">
          iOS geliştirme dünyasında güvenilir ve deneyimli ekibimizle birlikte
          geleceğin iOS geliştiricilerini yetiştiriyoruz.
        </p>
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={"card" + index}
              className={cn("group/card relative overflow-hidden rounded-lg text-center")}
            >
              <div className="flex flex-col items-center justify-center">
                <p className="text-4xl font-bold text-neutral-700 dark:text-neutral-200">
                  <AnimatedNumber value={item.value} />
                  <span className="text-[#FF6B35]">{item.subtext}</span>
                </p>
                <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-300 font-montserrat-semi">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({
  value,
  initial = 0,
}: {
  value: number;
  initial?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const spring = useSpring(initial, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString(),
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    } else {
      spring.set(initial);
    }
  }, [isInView, spring, value, initial]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
