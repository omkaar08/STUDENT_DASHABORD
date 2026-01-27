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
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 h-full">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-gray-900">Pending Actions</h2>
        <button className="text-xs font-medium text-gray-600 hover:text-gray-800 flex items-center gap-1">
          All <ArrowRight className="w-3 h-3" />
        </button>
      </div>
      <p className="text-xs font-light text-gray-500 mb-3">Tasks requiring attention</p>

      <div className="space-y-4">
        {actions.slice(0, 3).map((action) => {
          const IconComponent = iconMap[action.icon];
          return (
            <div
              key={action.id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-4 h-4 text-gray-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-gray-900 truncate leading-tight">
                    {action.title}
                  </div>
                  <div className="text-xs text-gray-500 truncate leading-tight mt-0.5">
                    {action.description}
                  </div>
                </div>
                <span className={`px-2 py-0.5 rounded text-xs font-medium flex-shrink-0 ${
                  action.priority === "urgent" ? "bg-red-100 text-red-600" : "bg-amber-100 text-amber-600"
                }`}>
                  {action.priority === "urgent" ? "Urgent" : "Important"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-3 text-xs text-gray-600 hover:text-gray-800 flex items-center justify-center gap-1 font-medium">
        View all tasks <ArrowRight className="w-3 h-3" />
      </button>
    </div>
  );
};

export default PendingActions;
