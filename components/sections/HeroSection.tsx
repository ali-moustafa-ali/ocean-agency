import Image from "next/image";
import { Phone, ChevronDown } from "lucide-react";
import { contactInfo } from "@/lib/data";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
        aria-hidden="true"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Animated gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm mb-6 animate-[fadeIn_1s_ease-out]">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          وكالة سفر متخصصة
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 tracking-tight animate-[fadeIn_1s_ease-out_0.2s_both]">
          Ocean Agency
        </h1>

        {/* Arabic Subtitle */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-6 animate-[fadeIn_1s_ease-out_0.4s_both]">
          وكالة المحيط للسفر والسياحة
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed animate-[fadeIn_1s_ease-out_0.6s_both]">
          نقدم لك تجربة سفر متكاملة ومريحة حول العالم
        </p>

        {/* CTA + Phone */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeIn_1s_ease-out_0.8s_both]">
          <a
            href="#contact"
            className="group px-8 py-4 bg-gradient-to-l from-primary to-primary-light text-white rounded-2xl font-bold text-lg shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            aria-label="انتقل إلى نموذج التواصل"
          >
            تواصل معنا
          </a>
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-medium hover:bg-white/20 transition-all duration-300"
            aria-label="اتصل بنا"
          >
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <Phone size={20} className="text-accent" />
            </div>
            <span dir="ltr" className="text-lg">
              {contactInfo.phone}
            </span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="انتقل إلى الأسفل"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
