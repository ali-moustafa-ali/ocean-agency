import { packages } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import PackageCard from "@/components/ui/PackageCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function PackagesSection() {
  return (
    <section id="packages" className="py-20 md:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="باقاتنا ووجهاتنا"
            subtitle="اكتشف أفضل العروض والوجهات السياحية حول العالم"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <AnimatedSection key={pkg.id} delay={index * 120}>
              <PackageCard
                country={pkg.country}
                price={pkg.price}
                description={pkg.description}
                category={pkg.category}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
