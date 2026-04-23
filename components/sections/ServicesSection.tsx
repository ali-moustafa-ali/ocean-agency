import { services } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="خدماتنا"
            subtitle="نقدم مجموعة متكاملة من خدمات السفر والسياحة لتلبية جميع احتياجاتك"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 100}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
