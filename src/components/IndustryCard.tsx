import { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
}

export const IndustryCard = ({ icon: Icon, title }: IndustryCardProps) => {
  return (
    <div className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300 cursor-pointer">
      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow-primary transition-all duration-300">
        <Icon className="w-8 h-8 text-primary-foreground" />
      </div>
      <h3 className="text-lg font-semibold text-center group-hover:text-primary transition-colors">
        {title}
      </h3>
    </div>
  );
};
