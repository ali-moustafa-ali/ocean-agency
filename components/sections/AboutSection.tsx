import { Eye, Target, Compass } from "lucide-react";
import { aboutContent } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutSection() {
  const sections = [
    {
      icon: Compass,
      title: "من نحن",
      content: aboutContent.description,
      gradient: "from-primary to-primary-light",
    },
    {
      icon: Eye,
      title: "رؤيتنا",
      content: aboutContent.vision,
      gradient: "from-secondary to-secondary-light",
    },
    {
      icon: Target,
      title: "رسالتنا",
      content: aboutContent.mission,
      gradient: "from-accent-dark to-accent",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="من نحن"
            subtitle="تعرف على وكالة المحيط للسفر والسياحة"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {sections.map((section, index) => (
            <AnimatedSection key={section.title} delay={index * 150}>
              <div className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border/50 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-500 h-full">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center mb-5 shadow-lg`}
                >
                  <section.icon size={28} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text mb-4">
                  {section.title}
                </h3>

                {/* Content */}
                <p className="text-text-muted text-sm leading-relaxed">
                  {section.content}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
