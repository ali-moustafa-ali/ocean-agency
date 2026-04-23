import { features, values } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureItem from "@/components/ui/FeatureItem";
import ValueBadge from "@/components/ui/ValueBadge";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="لماذا تختارنا؟"
            subtitle="نتميز بالخبرة والاحترافية في تقديم خدمات السفر والسياحة"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Features */}
          <AnimatedSection delay={100}>
            <div className="bg-surface-alt rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
                <span className="w-1.5 h-8 rounded-full bg-gradient-to-b from-primary to-secondary" />
                مميزاتنا
              </h3>
              <div className="space-y-2">
                {features.map((feature, index) => (
                  <AnimatedSection key={feature.id} delay={150 + index * 80}>
                    <FeatureItem icon={feature.icon} title={feature.title} />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Values */}
          <AnimatedSection delay={200}>
            <div className="bg-surface-alt rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
                <span className="w-1.5 h-8 rounded-full bg-gradient-to-b from-accent to-accent-dark" />
                قيمنا
              </h3>
              <div className="flex flex-wrap gap-3">
                {values.map((value) => (
                  <ValueBadge
                    key={value.id}
                    title={value.title}
                    icon={value.icon}
                  />
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 rounded-xl bg-white">
                  <p className="text-3xl font-extrabold text-primary mb-1">
                    +٥٠٠
                  </p>
                  <p className="text-sm text-text-muted">عميل سعيد</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white">
                  <p className="text-3xl font-extrabold text-primary mb-1">
                    +١٠٠٠
                  </p>
                  <p className="text-sm text-text-muted">تأشيرة صادرة</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white">
                  <p className="text-3xl font-extrabold text-primary mb-1">
                    +٥٠
                  </p>
                  <p className="text-sm text-text-muted">وجهة سياحية</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white">
                  <p className="text-3xl font-extrabold text-primary mb-1">
                    ٢٤/٧
                  </p>
                  <p className="text-sm text-text-muted">دعم متواصل</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
