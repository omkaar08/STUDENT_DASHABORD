import { BookOpen } from "lucide-react";

const PaymentOverview = () => {
  const recentGrades = [
    { assessment: "Midterm Exam", course: "Database Systems", grade: "A-", score: 88, bgColor: "bg-blue-50" },
    { assessment: "Project 2", course: "Software Engineering", grade: "A", score: 92, bgColor: "bg-blue-50" },
    { assessment: "Lab Report 3", course: "Computer Networks", grade: "B+", score: 85, bgColor: "bg-orange-50" }
  ];

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'bg-green-100 text-green-700';
    if (grade.startsWith('B')) return 'bg-blue-100 text-blue-700';
    if (grade.startsWith('C')) return 'bg-yellow-100 text-yellow-700';
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm h-full">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>

      <div className="space-y-3">
        {recentGrades.map((item, index) => (
          <div key={index} className={`${item.bgColor} p-3 rounded-lg border border-gray-200 transition-all duration-200`}>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.assessment}</h3>
                <p className="text-xs text-gray-600">{item.course}</p>
              </div>
              <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentOverview;