import { Calendar, GraduationCap, Clock, FileText } from "lucide-react";

interface QuickAction {
  id: string;
  title: string;
  icon: React.ElementType;
  bgColor: string;
  iconColor: string;
}

const quickActions: QuickAction[] = [
  {
    id: "1",
    title: "View Timetable",
    icon: Calendar,
    bgColor: "bg-blue-50 hover:bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "2",
    title: "View Grades",
    icon: GraduationCap,
    bgColor: "bg-blue-50 hover:bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "3",
    title: "Check Attendance",
    icon: Clock,
    bgColor: "bg-orange-50 hover:bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    id: "4",
    title: "Request Document",
    icon: FileText,
    bgColor: "bg-orange-50 hover:bg-orange-100",
    iconColor: "text-orange-600",
  },
];

const QuickActions = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm h-full">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
      <div className="space-y-3">
        {quickActions.map((action) => {
          const IconComponent = action.icon;
          return (
            <button
              key={action.id}
              className={`w-full flex items-center gap-3 p-3.5 rounded-xl ${action.bgColor} transition-all duration-200`}
            >
              <IconComponent className={`w-5 h-5 ${action.iconColor}`} />
              <span className="text-sm font-medium text-gray-700">
                {action.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;