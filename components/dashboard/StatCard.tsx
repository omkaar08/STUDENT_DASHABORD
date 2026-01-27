import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  subtitleColor?: 'green' | 'red' | 'default';
  trend?: {
    value: string;
    positive: boolean;
  };
}

const StatCard = ({ title, value, subtitle, icon: Icon, subtitleColor = 'default', trend }: StatCardProps) => {
  const getSubtitleColor = () => {
    switch (subtitleColor) {
      case 'green': return 'text-green-600';
      case 'red': return 'text-red-600';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="stat-card">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-bold text-gray-900">{title}</span>
        <div className="stat-icon">
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-lg font-semibold text-gray-900">{value}</p>
        {trend ? (
          <p className={`text-sm font-medium ${trend.positive ? 'text-green-600' : 'text-red-600'}`}>
            {trend.positive ? '↑' : '↓'} {trend.value}
          </p>
        ) : (
          <p className={`text-sm font-medium ${getSubtitleColor()}`}>{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default StatCard;
