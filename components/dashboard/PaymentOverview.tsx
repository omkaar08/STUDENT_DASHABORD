import { BookOpen, CheckCircle } from "lucide-react";

const PaymentOverview = () => {
  const recentGrades = [
    { assessment: "Midterm Exam", course: "Database Systems", grade: "A-", score: 88, bgColor: "bg-blue-50", icon: CheckCircle },
    { assessment: "Project 2", course: "Software Engineering", grade: "A", score: 92, bgColor: "bg-blue-50", icon: CheckCircle },
    { assessment: "Lab Report 3", course: "Computer Networks", grade: "B+", score: 85, bgColor: "bg-orange-50", icon: CheckCircle }
  ];

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'bg-green-100 text-green-700';
    if (grade.startsWith('B')) return 'bg-blue-100 text-blue-700';
    if (grade.startsWith('C')) return 'bg-yellow-100 text-yellow-700';
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm h-full">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5 text-gray-600" />
        <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
      </div>

      <div className="space-y-3">
        {recentGrades.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className={`${item.bgColor} p-3 rounded-lg border border-gray-200 transition-all duration-200`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <IconComponent className="w-4 h-4 text-gray-600" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.assessment}</h3>
                    <p className="text-xs text-gray-600">{item.course}</p>
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

export default PaymentOverview;