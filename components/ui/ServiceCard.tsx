"use client";

import * as LucideIcons from "lucide-react";
import { scrollToSection } from "@/lib/utils";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[icon] || LucideIcons.Globe;

  return (
    <article className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border/50 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
      {/* Gradient accent top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-l from-primary via-secondary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary transition-all duration-500">
        <IconComponent
          size={28}
          className="text-primary group-hover:text-white transition-colors duration-500"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-text mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-text-muted text-sm leading-relaxed mb-5">
        {description}
      </p>

      {/* CTA */}
      <button
        onClick={() => scrollToSection("contact")}
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors duration-300 cursor-pointer"
      >
        تواصل معنا
        <LucideIcons.ArrowLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform duration-300"
        />
      </button>
    </article>
  );
}
