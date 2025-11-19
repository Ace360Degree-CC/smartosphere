import { Check } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
}

export const FeatureCard = ({ title, description }: FeatureCardProps) => {
  return (
    <div className="flex gap-4 p-6 rounded-lg bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300 group">
      <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        <Check className="w-5 h-5 text-primary-foreground" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};
