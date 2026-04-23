interface PackageCardProps {
  country: string;
  price: string;
  description: string;
  category: string;
}

export default function PackageCard({
  country,
  price,
  description,
  category,
}: PackageCardProps) {
  return (
    <article className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-2 transition-all duration-500">
      {/* Top gradient bar */}
      <div className="h-2 bg-gradient-to-l from-primary via-secondary to-primary-light" />

      <div className="p-6 md:p-8">
        {/* Category badge */}
        <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold mb-4">
          {category === "visa" ? "تأشيرات" : "سياحة"}
        </span>

        {/* Country */}
        <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors duration-300">
          {country}
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-2xl font-extrabold text-primary">{price}</span>
        </div>

        {/* Description */}
        <p className="text-text-muted text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className="block w-full text-center px-5 py-3 bg-gradient-to-l from-primary to-primary-light text-white rounded-xl font-medium hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300"
        >
          احجز الآن
        </a>
      </div>
    </article>
  );
}
