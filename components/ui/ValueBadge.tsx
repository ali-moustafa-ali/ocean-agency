import * as LucideIcons from "lucide-react";

interface ValueBadgeProps {
  title: string;
  icon: string;
}

export default function ValueBadge({ title, icon }: ValueBadgeProps) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[icon] || LucideIcons.Star;

  return (
    <div className="group flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-l from-accent/10 to-accent/5 border border-accent/20 hover:from-accent hover:to-accent-dark hover:border-accent transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-accent/20 cursor-default">
      <IconComponent
        size={18}
        className="text-accent-dark group-hover:text-white transition-colors duration-500"
      />
      <span className="text-sm font-bold text-accent-dark group-hover:text-white transition-colors duration-500">
        {title}
      </span>
    </div>
  );
}
