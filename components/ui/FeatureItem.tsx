import * as LucideIcons from "lucide-react";

interface FeatureItemProps {
  icon: string;
  title: string;
}

export default function FeatureItem({ icon, title }: FeatureItemProps) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[icon] || LucideIcons.CheckCircle;

  return (
    <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center shrink-0 group-hover:from-primary group-hover:to-secondary transition-all duration-500">
        <IconComponent
          size={24}
          className="text-primary group-hover:text-white transition-colors duration-500"
        />
      </div>
      <span className="text-base font-medium text-text">{title}</span>
    </div>
  );
}
