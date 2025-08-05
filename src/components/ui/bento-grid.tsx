"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

export function IOSBootcampBentoGrid() {
  return (
    <div className="mx-auto my-20 w-full max-w-7xl px-4 md:px-8">
      <h2 className="text-center font-sans text-xl font-bold tracking-tight text-neutral-800 md:text-4xl dark:text-neutral-100">
        iOS Bootcamp Müfredatı
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-center text-sm text-neutral-600 dark:text-neutral-400">
        Modern iOS geliştirme teknolojilerini kapsayan kapsamlı müfredat ile 
        App Store'a hazır uygulamalar geliştirmeyi öğrenin.
      </p>
      <div className="mt-20 grid gap-4 md:auto-rows-[25rem] md:grid-cols-3">
        {iosBootcampItems.map((item, index) => (
          <Card
            key={item.title + index + "ios-bootcamp-bento"}
            className={cn("flex flex-col justify-between", item.className)}
          >
            <CardContent className="h-40">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
            <CardSkeletonBody>{item.header}</CardSkeletonBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

const iosBootcampItems = [
  {
    title: "Swift Fundamentals",
    description:
      "Swift programlama dilinin temellerinden başlayarak, modern iOS geliştirme süreçlerine adım atın.",
    header: (
      <Image
        src="https://images.unsplash.com/photo-1603731955133-ca45bc6fec5f?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Swift Fundamentals"
        width={500}
        height={500}
        className="ml-6 w-full rounded-lg object-cover"
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: "SwiftUI Universe",
    description:
      "SwiftUI framework'ü ile modern ve responsive kullanıcı arayüzleri tasarlayın.",
    header: (
      <Image
        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center"
        alt="SwiftUI Universe"
        width={500}
        height={500}
        className="w-full rounded-lg object-cover"
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: "Core Data & APIs",
    description:
      "Core Data ile veri yönetimi, Combine framework'ü ile reactive programming öğrenin.",
    header: (
      <Image
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
        alt="Core Data & APIs"
        width={500}
        height={500}
        className="-ml-6 -mt-4 rounded-lg object-cover md:-mt-0"
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: "App Store Ready",
    description: "App Store deployment süreçleri, testing ve performance optimization ile uygulamanızı hazır hale getirin.",
    header: (
      <div className="flex">
        <Image
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center"
          alt="App Store Ready"
          width={500}
          height={500}
          className="ml-6 rounded-lg object-cover"
        />
        <Image
          src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center"
          alt="iOS Development"
          width={500}
          height={500}
          className="ml-6 mt-8 rounded-lg object-cover"
          />
      </div>
    ),
    className: "md:col-span-2",
},
{
    title: "Live Coding & Projects",
    description: "Gerçek dünya projeleri ile portfolyonuzu şekillendirin ve App Store'a hazır uygulamalar geliştirin.",
    header: (
        <Image
        src="https://images.unsplash.com/photo-1608759991391-370fb9fbf7b7?q=80&w=1320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Live Coding & Projects"
        width={500}
        height={500}
        className="mx-auto -mb-4 w-[calc(100%-3rem)] rounded-lg"
      />
    ),
    className: "md:col-span-1",
  },
];

// Card structure
const CardSkeletonBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("overflow-hidden", className)}>{children}</div>;
};

const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const variants = { initial: { x: 0 }, animate: { x: 10 } };
  return (
    <motion.h3
      variants={variants}
      transition={{ type: "tween", duration: 0.2 }}
      className={cn(
        "font-sans text-base font-medium tracking-tight text-neutral-700 dark:text-neutral-100",
        className,
      )}
    >
      {children}
    </motion.h3>
  );
};
const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const variants = { initial: { x: 0 }, animate: { x: 15 } };
  return (
    <motion.p
      variants={variants}
      transition={{ type: "tween", duration: 0.2 }}
      className={cn(
        "mt-2 max-w-xs text-base font-normal tracking-tight text-neutral-500 dark:text-neutral-400 font-montserrat-mid",
        className,
      )}
    >
      {children}
    </motion.p>
  );
};

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover="animate"
      className={cn(
        "group isolate flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 via-blue-600/30 to-blue-700/40 backdrop-blur-xl border border-blue-400/30 shadow-[0_8px_32px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)] transition-all duration-300",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};
