import { Calendar, FileText, CreditCard, BookOpen } from "lucide-react";

interface QuickAction {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
}

const quickActions: QuickAction[] = [
  {
    id: "1",
    title: "View Timetable",
    icon: Calendar,
    description: "Check your class schedule",
  },
  {
    id: "2",
    title: "Submit Assignment",
    icon: FileText,
    description: "Upload coursework",
  },
  {
    id: "3",
    title: "Pay Fees",
    icon: CreditCard,
    description: "Manage payments",
  },
  {
    id: "4",
    title: "Course Materials",
    icon: BookOpen,
    description: "Access resources",
  },
];

const QuickActions = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 h-full">
      <h2 className="text-base font-bold text-gray-900 mb-3">Quick Actions</h2>
      <div className="space-y-2">
        {quickActions.map((action) => {
          const IconComponent = action.icon;
          return (
            <button
              key={action.id}
              className="w-full flex items-center gap-3 p-3 rounded-xl border border-[#024698]/20 bg-[#024698]/5 hover:bg-[#024698]/10 transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <IconComponent className="w-4 h-4 text-[#024698]" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">{action.title}</p>
                <p className="text-xs text-gray-500">{action.description}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;