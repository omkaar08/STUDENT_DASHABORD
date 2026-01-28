import { FileText, CreditCard, ClipboardList, ArrowRight } from "lucide-react";

interface Action {
  id: string;
  title: string;
  description: string;
  time: string;
  priority: "urgent" | "important";
  icon: "payment" | "assignment" | "registration";
}

const actions: Action[] = [
  {
    id: "1",
    title: "Pending Fee Payment",
    description: "Due 2 days ago",
    time: "Due 2 days ago",
    priority: "urgent",
    icon: "payment",
  },
  {
    id: "2",
    title: "DBMS Assignment 4",
    description: "Due in 2 days",
    time: "Due in 2 days",
    priority: "urgent",
    icon: "assignment",
  },
  {
    id: "3",
    title: "Complete Course Registration",
    description: "Due in 5 days",
    time: "Due in 5 days",
    priority: "important",
    icon: "registration",
  },
];

const iconMap = {
  payment: CreditCard,
  assignment: FileText,
  registration: ClipboardList,
};

const PendingActions = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm h-full">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Pending Actions</h2>

      <div className="space-y-3">
        {actions.slice(0, 3).map((action) => {
          const IconComponent = iconMap[action.icon];
          return (
            <div
              key={action.id}
              className="bg-gray-50 p-3 rounded-lg border border-gray-200 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <IconComponent className="w-4 h-4 text-gray-600" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {action.title}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {action.description}
                    </p>
                  </div>
                </div>
                <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PendingActions;
