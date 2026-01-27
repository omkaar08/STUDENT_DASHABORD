import { BookOpen } from "lucide-react";

const PaymentOverview = () => {
  const recentGrades = [
    { assessment: "Midterm Exam", course: "Database Systems", grade: "A-", score: 88 },
    { assessment: "Project 2", course: "Software Engineering", grade: "A", score: 92 },
    { assessment: "Lab Report 3", course: "Computer Networks", grade: "B+", score: 85 }
  ];

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'bg-green-100 text-green-700';
    if (grade.startsWith('B')) return 'bg-blue-100 text-blue-700';
    if (grade.startsWith('C')) return 'bg-yellow-100 text-yellow-700';
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 h-full">
      <div className="flex items-center gap-2 mb-3">
        <BookOpen className="w-4 h-4 text-gray-600" />
        <h2 className="text-base font-bold text-gray-900">Recent Activity</h2>
      </div>

      <div className="space-y-2">
        {recentGrades.map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{item.assessment}</p>
                <p className="text-xs text-gray-500 mt-0.5">{item.course}</p>
              </div>
              <span className={`px-2 py-1 rounded text-xs font-medium ml-2 flex-shrink-0 ${getGradeColor(item.grade)}`}>
                {item.grade}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-3 mt-2 border-t border-gray-100">
        <div className="text-xs text-gray-500">
          <span>Last updated: Dec 18, 2023</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentOverview;